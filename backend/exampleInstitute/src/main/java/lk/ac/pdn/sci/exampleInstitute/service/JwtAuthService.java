package lk.ac.pdn.sci.exampleInstitute.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtAuthService {
    private String SecretKey = "MySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYouMySecretKeyIsYou";

    public String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, username);
    }
    private String createToken(Map<String, Object> claims, String username){
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*60)) //1 hour
                .signWith(getSignedKey(),SignatureAlgorithm.HS256).compact();
    }
    private Key getSignedKey(){
        byte[] bytes = Decoders.BASE64.decode(SecretKey);
        return Keys.hmacShaKeyFor(bytes);
    }


    public String extractUserName(String token) {
        return extractClaims(token, Claims::getSubject);
    }

    private <T> T extractClaims(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignedKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String name = extractUserName(token);
        return (name.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token) {
        return extractExpiraction(token).before(new Date());
    }

    private Date extractExpiraction(String token) {
        return extractClaims(token, Claims::getExpiration);
    }
}

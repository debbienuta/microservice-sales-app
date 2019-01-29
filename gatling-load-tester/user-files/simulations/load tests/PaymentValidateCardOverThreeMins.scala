import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class ValidateCardOverThreeMins extends Simulation {
  val httpProtocol1 = http.baseURL("http://localhost:8080").inferHtmlResources()
  val scn1 = scenario("Monolith Payment Validate Card").repeat(2) { 
  exec(http("Monolith Payment Validate Card").post("/api/card-reader-controller/validate-card/700700700/0000"))
  }
  val httpProtocol2 = http.baseURL("http://localhost:8082").inferHtmlResources()
  val scn2 = scenario("Microservice Payment Validate Card").repeat(2) { 
  exec(http("Microservice Payment Validate Card").post("/api/card-reader-controller/validate-card/700700700/0000"))
  }
  setUp(scn1.inject(constantUsersPerSec(10) during (180)).protocols(httpProtocol1),
  scn2.inject(constantUsersPerSec(10) during (180)).protocols(httpProtocol1)
        )
}


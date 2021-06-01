# chromedriver91cacheBug
 
Steps to reproduce:

1. docker run --rm --name selenium-standalone -p 4444:4444 -p 5900:5900 -d -P --shm-size=2g selenium/standalone-chrome:89.0.4389.114-chromedriver-89.0.4389.23
2. run npm test (passes)
3. docker stop selenium-standalone
4. docker run --rm --name selenium-standalone -p 4444:4444 -p 5900:5900 -d -P --shm-size=2g selenium/standalone-chrome:91.0-chromedriver-91.0
5. run npm test (fails)
6. docker stop selenium-standalone

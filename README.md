# chromedriver91cacheBug
 
Steps to reproduce:

docker run --rm --name selenium-standalone -p 4444:4444 -p 5900:5900 -d -P --shm-size=2g selenium/standalone-chrome:89.0.4389.114-chromedriver-89.0.4389.23
run npm test (passes)
docker stop selenium-standalone
docker run --rm --name selenium-standalone -p 4444:4444 -p 5900:5900 -d -P --shm-size=2g selenium/standalone-chrome:91.0-chromedriver-91.0
run npm test (fails)
docker stop selenium-standalone
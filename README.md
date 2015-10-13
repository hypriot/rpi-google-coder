###Google Coder for ARM devices
#####Docker image

[Google Coder](http://googlecreativelab.github.io/coder/) is an awesome project that provides a complete coding environment in your browser.
It is made specifically for Raspberry Pi as it allows to access the hardware of the Pi via the GPIO's.

#####Build the image
```
docker build -t hypriot/rpi-google-coder github.com/hypriot/rpi-google-coder
```

#####Run Google Coder
```
docker run -d -p 8080:8080 -p 8081:8081 hypriot/rpi-google-coder
```

You can access Google Coder on your Raspberry Pi via a web browser: ```https://"%IP_of_your_Raspberry_Pi%":8080/```,
for example: ```https://192.168.2.108:8080/```
Do not forget to use ```https```!

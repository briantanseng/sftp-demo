# sftp-demo
## Checkout the code & navigate to the project directory
```
git clone git@github.com:briantanseng/sftp-demo.git && cd sftp-demo
```
## Setup the environment variables

Create a file called `setenvs.sh`. Add the needed values 
```
       │ File: setenvs.sh
───────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1   │ export SFTP_SERVER='IP_ADDRESS_OF_YOUR_SFTP_SERVER';
   2   │ export SFTP_PORT='PORT_NUMBER';
   3   │ export SFTP_USER='USERNAME';
   4   │ export PRIVATE_KEY='./id_rsa';
```
Load the environment variables 
```
source setenvs.sh
```
## Run the project
```
node index.js
```
Sample output
```
Uploaded data stream to /home/username/sample-data.csv <-- Success!
```

# Food order catalogue - FOOD HUB

### Installation Guidlines

#### STEP 1

 ```sh
   git clone https://github.com/anujkalyan/Food-Hub.git
   ```

#### STEP 2
###### (Make sure to run this in the root directory and also in the frontend directory) 

 ```sh
   npm install
   ```
   
#### STEP 3
###### ( run this in the frontend directory) 

 ```sh
   npm run build
   ```
   
#### STEP 4
######  [Grab Your Publishable key and Secret key from your stripe dashboard https://dashboard.stripe.com/test/apikeys](https://dashboard.stripe.com/test/apikeys)

#### STEP 5
###### (Replace the existing stripe key with your own Publishable key )
##### Path - (frontend/src/screens/CartScreen)



#### STEP 6
###### (Create .env file in the root directory with the following Variables) 

  ```sh
  PORT=5000
  NODE_ENV= production
  SECRET_KEY = 
   ```
   
#### STEP 7
###### (Make sure to run this in the root directory to import products data into Database) 

 ```sh
   npm run data:import
   ```

* ##### Starting the development server
###### (Make sure to run this in the root directory)
```sh
 npm start
   ```
   
## Want To Test Payment Method ??
#### [You can use stripe test cards](https://stripe.com/docs/testing#cards)

* CARD - 4242424242424242
* DATE - Any Future Date
* CVC - Any 3 Digit Number



   

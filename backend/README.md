# Backend Server Setup

## MongoDB Connection Setup

### 1. Create Environment File
Copy the `env.example` file to `.env`:
```bash
cp env.example .env
```

### 2. Configure MongoDB Atlas Connection

1. **Get your MongoDB Atlas connection string:**
   - Log into [MongoDB Atlas](https://cloud.mongodb.com)
   - Go to your cluster
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string

2. **Update your `.env` file:**
   ```env
   MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database_name?retryWrites=true&w=majority
   PORT=5000
   ```

### 3. MongoDB Atlas Configuration

#### Network Access
1. In MongoDB Atlas, go to "Network Access"
2. Add your IP address or use `0.0.0.0/0` for all IPs (not recommended for production)

#### Database Access
1. Go to "Database Access"
2. Create a database user with read/write permissions
3. Use these credentials in your connection string

### 4. Install Dependencies
```bash
npm install
```

### 5. Start the Server
```bash
npm start
```

## Troubleshooting

### Common Issues:

1. **"MONGO_URI environment variable is not set"**
   - Make sure you have a `.env` file in the backend directory
   - Check that the file contains `MONGO_URI=your_connection_string`

2. **Network connectivity issues**
   - Check your internet connection
   - Verify your IP is whitelisted in MongoDB Atlas
   - Ensure the cluster is running

3. **Authentication failed**
   - Verify username and password are correct
   - Check that the database user has proper permissions
   - Ensure the database name is correct

4. **Connection string format**
   - Make sure to replace `<username>`, `<password>`, `<cluster-name>`, etc. with actual values
   - Don't include angle brackets `<>` in the actual connection string

### Example Connection String:
```
mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/ecommerce?retryWrites=true&w=majority
```

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `GET /api/products/:id` - Get a specific product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product 
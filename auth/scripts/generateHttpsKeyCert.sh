#!/bin/bash

OUTPUT_DIR="../https"
KEY_FILE="$OUTPUT_DIR/private.key"
CERT_FILE="$OUTPUT_DIR/certificate.crt"
CSR_FILE="$OUTPUT_DIR/request.csr"

# Create dir if not exist
mkdir -p $OUTPUT_DIR

# Generate private key
openssl genrsa -out $KEY_FILE 2048

# Create request for certificate (CSR)
openssl req -new -key $KEY_FILE -out $CSR_FILE -subj "/C=RU/ST=Moscow/L=Moscow/O=better"

# Generate certigicate
openssl x509 -req -days 365 -in $CSR_FILE -signkey $KEY_FILE -out $CERT_FILE

# Remove csr (not used)
rm $CSR_FILE


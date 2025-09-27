import * as fs from "node:fs";
import { exec } from "node:child_process";
import * as path from "node:path";

/**
 * Generate key and certificate for HTTPS connection
 */
function httpsKeyCert() {
  const OUTPUT_DIR = "https";
  const KEY_FILE = path.join(OUTPUT_DIR, "private.key");
  const CERT_FILE = path.join(OUTPUT_DIR, "certificate.crt");
  const CSR_FILE = path.join(OUTPUT_DIR, "request.csr");

  // Create directory if it does not exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  // Generate private key
  exec(`openssl genrsa -out ${KEY_FILE} 2048`, (err) => {
    if (err) {
      console.error("Error generating private key:", err);
      return;
    }

    // Create request for certificate (CSR)
    exec(
      `openssl req -new -key ${KEY_FILE} -out ${CSR_FILE} -subj "/C=RU/ST=Moscow/L=Moscow/O=better"`,
      (err) => {
        if (err) {
          console.error("Error creating CSR:", err);
          return;
        }

        // Generate certificate
        exec(
          `openssl x509 -req -days 365 -in ${CSR_FILE} -signkey ${KEY_FILE} -out ${CERT_FILE}`,
          (err) => {
            if (err) {
              console.error("Error generating certificate:", err);
              return;
            }

            // Remove CSR file
            fs.unlink(CSR_FILE, (err) => {
              if (err) {
                console.error("Error removing CSR file:", err);
              } else {
                console.log(
                  "Private key and certificate generated successfully."
                );
              }
            });
          }
        );
      }
    );
  });
}
httpsKeyCert();

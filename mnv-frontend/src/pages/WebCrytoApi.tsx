import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

type Props = {};

const WebCrytoApi = (props: Props) => {
  const [keyPair, setKeyPair] = useState<CryptoKeyPair | null>(null);
  const [encryptedData, setEncryptedData] = useState<string | null>(null);
  const [decryptedData, setDecryptedData] = useState<string | null>(null);
  const [input, setInput] = useState<string>('');
  const [exportedPublicKey, setExportedPublicKey] = useState<string | null>(
    null
  );
  const generateKeyPair = async () => {
    const keys = await window.crypto.subtle.generateKey(
      {
        name: 'RSA-OAEP',
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: { name: 'SHA-256' },
      },
      false, // extractable: false
      ['encrypt', 'decrypt']
    );
    setKeyPair(keys);
    // alert('KeyPair created successfully!');
    console.log('KeyPair created successfully!');

    console.log(keys);
  };
  // เข้ารหัสข้อมูล
  const encryptData = async () => {
    if (!keyPair || !keyPair.publicKey) {
      alert('KeyPair not generated yet!');
      return;
    }
    const encodedData = new TextEncoder().encode(input);
    const encrypted = await window.crypto.subtle.encrypt(
      { name: 'RSA-OAEP' },
      keyPair.publicKey,
      encodedData
    );
    setEncryptedData(btoa(String.fromCharCode(...new Uint8Array(encrypted))));
  };
  // ถอดรหัสข้อมูล
  const decryptData = async () => {
    if (!keyPair || !keyPair.privateKey || !encryptedData) {
      alert('Missing KeyPair or encrypted data!');
      return;
    }

    const encryptedArray = Uint8Array.from(atob(encryptedData), (c) =>
      c.charCodeAt(0)
    );
    const decrypted = await window.crypto.subtle.decrypt(
      { name: 'RSA-OAEP' },
      keyPair.privateKey,
      encryptedArray
    );

    setDecryptedData(new TextDecoder().decode(decrypted));
  };

  const exportPublicKey = async () => {
    if (!keyPair || !keyPair.publicKey) {
      alert('KeyPair not generated yet!');
      return;
    }
    const exportedKey = await window.crypto.subtle.exportKey(
      'jwk', // Format for exporting public key
      keyPair.privateKey
    );

    // Convert to Base64 for easier sharing
    //const base64Key = btoa(String.fromCharCode(...new Uint8Array(exportedKey)));
    const jwkString = JSON.stringify(exportedKey);
    setExportedPublicKey(jwkString);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Web Crypto Test
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={generateKeyPair}
        sx={{ mb: 2 }}
      >
        Generate KeyPair
      </Button>

      <TextField
        fullWidth
        label="Input Data"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="secondary"
        onClick={encryptData}
        sx={{ mb: 2 }}
        disabled={!keyPair}
      >
        Encrypt
      </Button>

      {encryptedData && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1">
            <strong>Encrypted Data:</strong>
          </Typography>
          <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
            {encryptedData}
          </Typography>
        </Box>
      )}

      <Button
        variant="contained"
        color="success"
        onClick={decryptData}
        sx={{ mb: 2 }}
        disabled={!encryptedData || !keyPair}
      >
        Decrypt
      </Button>

      {decryptedData && (
        <Box>
          <Typography variant="body1">
            <strong>Decrypted Data:</strong>
          </Typography>
          <Typography variant="body2">{decryptedData}</Typography>
        </Box>
      )}

      <Button
        variant="contained"
        color="info"
        onClick={exportPublicKey}
        sx={{ mb: 2 }}
        disabled={!keyPair}
      >
        Export Public Key
      </Button>
      {exportedPublicKey && (
        <Box>
          <Typography variant="body1">
            <strong>Exported Public Key (Base64):</strong>
          </Typography>
          <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
            {exportedPublicKey}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default WebCrytoApi;

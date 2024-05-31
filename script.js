function generateKeyPair() {
            var crypt = new JSEncrypt({default_key_size: 2048});

            var publicKey = crypt.getPublicKey();
            var privateKey = crypt.getPrivateKey();

            document.getElementById("publicKey").value = publicKey;
            document.getElementById("privateKey").value = privateKey;
        }

function copyToClipboard(elementId) {
            var textarea = document.getElementById(elementId);
            textarea.select();
            document.execCommand('copy');
        }

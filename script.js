function generateKeyPair() {
            var crypt = new JSEncrypt({default_key_size: 2048});

            var publicKey = crypt.getPublicKey();
            var privateKey = crypt.getPrivateKey();

            document.getElementById("publicKey").value = publicKey;
            document.getElementById("privateKey").value = privateKey;
        }

function copyToClipboard(elementId) {
            var textarea = document.getElementById(elementId);
            var lines = textarea.value.split('\n');

            // Remove the first and last lines
            if (lines.length > 2) {
                lines = lines.slice(1, -1);
            }

            // Join the remaining lines and copy them to the clipboard
            var textToCopy = lines.join('\n');

            var temporaryTextarea = document.createElement('textarea');
            temporaryTextarea.value = textToCopy;
            document.body.appendChild(temporaryTextarea);
            temporaryTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(temporaryTextarea);

            // Alert the copied text (optional)
            alert(elementId.charAt(0).toUpperCase() + elementId.slice(1) + " copied to clipboard (without first and last lines)!");
        }
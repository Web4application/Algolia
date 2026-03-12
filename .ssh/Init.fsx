/* -lutil */ 
#include <util.h>

int
bcrypt_pbkdf(const char *pass, size_t pass_len, const uint8_t *salt, size_t salt_len, uint8_t *key, size_t key_len, unsigned int rounds);
ssh-keygen	[-q] [-a rounds] [-b bits] [-C comment] [-f output_keyfile] [-m format] [-N new_passphrase] [-O option] [-t ecdsa | ecdsa-sk | ed25519 | ed25519-sk | rsa] [-w provider] [-Z cipher]

ssh-keygen	-p [-a rounds] [-f keyfile] [-m format] [-N new_passphrase] [-P old_passphrase] [-Z cipher]

ssh-keygen	-i [-f input_keyfile] [-m key_format]

ssh-keygen	-e [-f input_keyfile] [-m key_format]

ssh-keygen	-y [-f input_keyfile]

ssh-keygen	-c [-a rounds] [-C comment] [-f keyfile] [-P passphrase]

ssh-keygen	-l [-v] [-E fingerprint_hash] [-f input_keyfile]

ssh-keygen	-B [-f input_keyfile]

ssh-keygen	-D pkcs11

ssh-keygen	-F hostname [-lv] [-f known_hosts_file]

ssh-keygen	-H [-f known_hosts_file]

ssh-keygen	-K [-a rounds] [-w provider]

ssh-keygen	-R hostname [-f known_hosts_file]

ssh-keygen	-r hostname [-g] [-f input_keyfile]

ssh-keygen	-M generate [-O option] output_file

ssh-keygen	-M screen [-f input_file] [-O option] output_file

ssh-keygen	-I certificate_identity -s ca_key [-hU] [-D pkcs11_provider] [-n principals] [-O option] [-V validity_interval] [-z serial_number] file ...

ssh-keygen	-L [-f input_keyfile]

ssh-keygen	-A [-a rounds] [-f prefix_path]

ssh-keygen	-k -f krl_file [-u] [-s ca_public] [-z version_number] file ...

ssh-keygen	-Q [-l] -f krl_file file ...

ssh-keygen	-Y find-principals [-O option] -s signature_file -f allowed_signers_file

ssh-keygen	-Y match-principals -I signer_identity -f allowed_signers_file

ssh-keygen	-Y check-novalidate [-O option] -n namespace -s signature_file

ssh-keygen	-Y sign [-O option] -f key_file -n namespace file ...

ssh-keygen	-Y verify [-O option] -f allowed_signers_file -I signer_identity -n namespace -s signature_file [-r revocation_file]


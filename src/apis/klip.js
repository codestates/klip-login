import axios from 'axios';

/**
 * Send a prepare request to the klip wallet.
 * @returns requestCode
 */
export async function postPrepare() {
    try {
        const res = await axios.post(
            'https://a2a-api.klipwallet.com/v2/a2a/prepare',
            {
                bapp: {
                    name: 'BEB-DID',
                },
                type: 'auth',
            },
        );
        return res.data.request_key;
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * Send a result request to the klip wallet.
 * @returns address
 */
export async function getResult(requestKey) {
    try {
        const res = await axios.get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${requestKey}`,
        );
        return res.data.status === 'completed'
            ? res.data.result.klaytn_address
            : null;
    } catch (error) {
        throw new Error(error);
    }
}

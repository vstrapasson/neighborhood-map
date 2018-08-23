const client_id = 'LO2OFQSYZEQO44TW3BWAUWYT20XS25QXHJAFLVSKIVCN2XMH';
const client_secret = 'URBM5VBENAAWONARYPL5KJFQOMICTAPB5HSPJG4EZASCQ5YE';
const credentials = `client_id=${client_id}&client_secret=${client_secret}&v=20180921`;


export const getDetails = (id) => {
  return fetch(`https://api.foursquare.com/v2/venues/${id}?${credentials}`)
    .then(res => {
      if(!res.ok){
        throw new Error("A error was occurred in loading details, please try again later.");
      }
      return res.json();
    })
    .then(json => json.response)
}

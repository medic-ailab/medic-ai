// Every launch fact lives here. Replace a value once it's decided and the page updates.
const TBA = "To be announced";

export const token = {
  ticker: "$MEDIC",
  chain: TBA,
  supply: TBA,
  launchDate: TBA,
  // Stays null until the token is deployed. The page warns people about fakes while it's null.
  contractAddress: null as string | null,
};

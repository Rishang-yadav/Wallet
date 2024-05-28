const InscribeSchema = new mongoose.Schema({
    order_id: { type: String, required: true },
    receive_address: { type: String, required: true },
    chain_fee: { type: Number, required: true },
    service_fee: { type: Number, required: true },
    referral_fee: { type: Number, required: false },
    referrer: { type: String, required: false },
    txid: { type: String, required: false },
    psbt: { type: String, required: true },
    status: { type: String, required: true },
  }, { timestamps: true });
  
  const Inscribe = mongoose.model('Inscribe', InscribeSchema);
  export default Inscribe;
  
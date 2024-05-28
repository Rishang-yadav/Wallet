const CreateInscriptionSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Inscribe', required: true },
    privkey: { type: String, required: true },
    receive_address: { type: String, required: true },
    file_type: { type: String, required: true },
    file_name: { type: String, required: true },
    base64_data: { type: String, required: true },
    file_size: { type: Number, required: true },
    inscription_address: { type: String, required: true },
    txid: { type: String, required: false },
    leaf: { type: String, required: true },
    tapkey: { type: String, required: true },
    cblock: { type: String, required: true },
    inscription_fee: { type: Number, required: true },
    inscription_id: { type: String, required: false },
    metaprotocol: { type: String, required: false },
    network: { type: String, required: true },
    status: { type: String, required: true },
    webhook_url: { type: String, required: false },
    fee_rate: { type: Number, required: true },
  }, { timestamps: true });
  
  const CreateInscription = mongoose.model('CreateInscription', CreateInscriptionSchema);
  export default CreateInscription;
  
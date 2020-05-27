import mongoose, {Schema} from 'mongoose';

const Meetup = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, 'Must be at least 5 characters']
  },
  meetupDate: {
    type: Date
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: "Users"
  }],
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  }
});

export default mongoose.model("Meetup", Meetup);
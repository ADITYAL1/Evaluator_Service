import { createBullBoard } from "@bull-board/api";
import { ExpressAdapter } from "@bull-board/express";
import {BullMQAdapter} from "@bull-board/api/bullMQAdapter"

import SampleQueue from "../queue/SampleQueue";

const serverAdapter =new ExpressAdapter();
serverAdapter.setBasePath('/ui/queue');

createBullBoard({
    queues: [new BullMQAdapter(SampleQueue)],
    serverAdapter: serverAdapter,
  });
  export default serverAdapter;
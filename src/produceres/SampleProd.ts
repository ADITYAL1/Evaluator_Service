import SampleQueue from "../queue/SampleQueue";

export default async function samplequeueprod(name:string ,payload:Record<string,unknown>){
    await SampleQueue.add(name,payload)
}
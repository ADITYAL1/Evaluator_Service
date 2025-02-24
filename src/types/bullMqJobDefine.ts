import {Job} from 'bullmq'

export default interface Ijob{
    name:string;
    payload?: Record<string,unknown>;
    handle:(job:Job)=>void;
    failed:(job:Job)=>void;
}
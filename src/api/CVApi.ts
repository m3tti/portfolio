import axios from "axios";

export interface Step {
    duration: string,
    company: string,
    role: string,
    technologies: Array<string>,
}

export class CVApi {
    static async fetch(): Promise<Step[]> {
        let req = await axios.get("/assets/cv.json");

        return req.data;
    }
}
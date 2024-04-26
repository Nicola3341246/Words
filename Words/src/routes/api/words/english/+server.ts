import { error } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import type { wordlist } from "$lib/index";
import worldeList from "./wordlist-english.json?raw"

export const GET: RequestHandler = async ({ url }) => {
    const one = 1;
    if(1 != one) {
        return error(400, "One is not equal to one" + url);
    }

    if (!worldeList){
        return error(201, "No wordlist");
    }
    const wordJson = JSON.parse(worldeList) as wordlist;
    const wordlist = wordJson.words

    const rd = Math.floor(Math.random() * wordlist.length);
	return new Response(wordlist[rd].toLowerCase());
};
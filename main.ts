import { mkdirSync, writeFileSync } from "node:fs";

// Wi-Fi network name: a breakup in 31 characters. She took the
// dog; the WiFi is the consolation prize still broadcasting.
const WIFI_OPEN = "She Took The Dog,";
const WIFI_MIDDLE = " Left The";
const WIFI_CLOSE = " WiFi";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

const ENTRY = WIFI_OPEN + WIFI_MIDDLE + WIFI_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

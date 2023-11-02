export { join, dirname, delimiter, sep } from 'https://deno.land/std@0.170.0/node/path.ts';
export { access, readdir, mkdir, writeFile } from 'https://deno.land/std@0.170.0/node/fs/promises.ts';
export { exec, spawn } from 'https://deno.land/std@0.170.0/node/child_process.ts';
export { get } from 'https://deno.land/std@0.170.0/node/http.ts';

/*** "https://deno.land/std@0.205.0/node" does not exist. ***/
/*** It does not work in "npm URLs". Support npm URLs : https://github.com/denoland/deno/issues/13703 ***/
// export { join, dirname, delimiter, sep } from "npm:path";
// export { access, readdir, mkdir, writeFile } from "npm:fs/promises";
// export { exec, spawn } from 'https://deno.land/std@0.170.0/node/child_process.ts';
// export { get } from "npm:http";

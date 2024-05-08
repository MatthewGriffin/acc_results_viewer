import * as wasm from "./wasm_template_rust_bg.wasm";
import { __wbg_set_wasm } from "./wasm_template_rust_bg.js";
__wbg_set_wasm(wasm);
export * from "./wasm_template_rust_bg.js";

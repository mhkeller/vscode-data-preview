import { LogLevel } from "./logger";

// log level setting for prod. vs. dev run of this ext.
export const logLevel: LogLevel = LogLevel.Info; // change to .Debug for ext. dev debug

export const supportedDataFiles: RegExp = /.*\.(json|json5|hjson|arrow|arr|avro|parquet|parq|config|env|properties|ini|yaml|yml|csv|tsv|txt|tab|dif|ods|prn|slk|xls|xlsb|xlsx|xlsm|xml|html)/;

export const supportedBinaryDataFiles: RegExp = /.*\.(arrow|arr|avro|parquet|parq|ods|xls|xlsb|xlsx|xlsm)/;

// arrow to data view type mappings
// see: https://github.com/finos/perspective/blob/master/packages/perspective/src/js/utils.js
// and https://github.com/finos/perspective/blob/master/packages/perspective/src/js/perspective.js#ArrowColumnLoader
export const dataTypes = { 
  "Binary": "string",
  "Bool": "boolean",
  "Date": "date",
  "Dictionary": "string",
  "Float32": "float",
  "Float64": "float",
  "Int8": "integer",
  "Int16": "integer",
  "Int32": "integer",
  "Int64": "integer",
  "Timestamp": "datetime",
  "Utf8": "string",
};

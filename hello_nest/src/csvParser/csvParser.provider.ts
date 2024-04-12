import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse as csvParse } from 'csv-parse';

@Injectable()
export class CsvParser {
  constructor(@Inject('CSV_PATH') private readonly path) {}

  async parse() {
    const records = [];
    const parser = fs.createReadStream(this.path).pipe(
      csvParse({
        // CSV options if any
      }),
    );
    for await (const record of parser) {
      // Work with each record
      records.push(record);
    }
    return records;
  }
}

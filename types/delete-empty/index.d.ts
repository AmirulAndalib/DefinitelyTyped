declare function deleteEmpty(dir: string, options: deleteEmpty.Options, cb: deleteEmpty.DeleteEmptyCallback): void;
declare function deleteEmpty(dir: string, cb: deleteEmpty.DeleteEmptyCallback): void;
declare function deleteEmpty(dir: string, options?: deleteEmpty.Options): Promise<string[]>;

declare namespace deleteEmpty {
    function sync(dir: string, options?: Options): string[];

    interface DeleteEmptyCallback {
        (err: Error | undefined | null, deleted: string[]): void;
    }

    interface Options {
        /**
         * Do a dry run without deleting any files
         * @default false
         */
        dryRun?: boolean | undefined;
        filter?: FilterFunction | undefined;
        junkRegex?: RegExp | undefined;
    }

    interface FilterFunction {
        (file: string, regex: RegExp): boolean;
    }
}

export = deleteEmpty;

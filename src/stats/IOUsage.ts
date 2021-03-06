/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

/**
 * Provides metrics on IO usage of requests.
 */
export class IOUsage {
    private _readIOs: number;

    /**
     * Creates an IOUsage.
     * @param readIOs The number of Read IOs.
     */
    constructor(readIOs: number) {
        this._readIOs = readIOs;
    }

    /**
     * Provides the number of Read IOs for a request.
     * @returns The number of Reads for a request.
     */
    getReadIOs(): number {
        return this._readIOs;
    }
}

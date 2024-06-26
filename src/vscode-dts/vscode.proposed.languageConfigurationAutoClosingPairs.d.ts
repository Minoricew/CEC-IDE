/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module 'vscode' {

	// https://github.com/opencec/CEC-IDE/issues/173738

	export interface LanguageConfiguration {
		autoClosingPairs?: {
			open: string;
			close: string;
			notIn?: string[];
		}[];
	}
}

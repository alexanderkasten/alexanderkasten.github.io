import { DataModels } from '@process-engine/consumer_api_contracts';
import { IFormField } from './iform_field';
export declare class StringFormField implements IFormField {
    value: string;
    isValid: boolean;
    formField: DataModels.UserTasks.UserTaskFormField;
    readonly name: string;
    componentWillLoad(): void;
    render(): any;
    private _handleChange;
}

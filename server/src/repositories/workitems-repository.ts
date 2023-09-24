import fs from 'fs';
import path from 'path';
import { AzureDevOpsWorkItem, WorkItem } from '@shared/shared-models/workitems'
import { AzureDevOpsWorkItem as AzureDevOpsWorkItemProto, WorkItem as WorkItemProto } from '@shared/shared-models/workitemsproto'
import { Config } from '../config';

function listJsonFiles(directory: string): string[] {
    const filesInDirectory = fs.readdirSync(directory);
    return filesInDirectory.filter(file => path.extname(file) === '.json');
}

function readJsonFile(filePath: string): AzureDevOpsWorkItem {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
}

export class WorkItemsRepository {
    public get_all() : AzureDevOpsWorkItemProto {
        const jsonDirectory = Config.dataPath;
        const jsonFiles = listJsonFiles(jsonDirectory);
        let azureDevOpsWorkItemProto: AzureDevOpsWorkItemProto = {
            count: 0,
            value: []
        }
        jsonFiles.forEach(file => {
            const filePath = path.join(jsonDirectory, file);
            const jsonData = readJsonFile(filePath);
            const workItem = jsonData.value[jsonData.count - 1];
            const workItemProto = this.convert_to_proto_object(workItem);
            azureDevOpsWorkItemProto.value?.push(workItemProto);
        });
        azureDevOpsWorkItemProto.count = azureDevOpsWorkItemProto.value?.length ?? 0;
        return azureDevOpsWorkItemProto;
    }

    convert_to_proto_object(workItem: WorkItem): WorkItemProto {
        const workItemProto: WorkItemProto = {
            id: workItem.id,
            rev: workItem.rev,
            url: workItem.url,
            relations: workItem.relations,
            fields: {
                priority: workItem.fields['Microsoft.VSTS.Common.Priority'],
                stateChangeDate: workItem.fields['Microsoft.VSTS.Common.StateChangeDate'],
                valueArea: workItem.fields['Microsoft.VSTS.Common.ValueArea'],
                effort: workItem.fields['Microsoft.VSTS.Scheduling.Effort'],
                remainingWork: workItem.fields['Microsoft.VSTS.Scheduling.RemainingWork'],
                areaId: workItem.fields['System.AreaId'],
                areaLevel1: workItem.fields['System.AreaLevel1'],
                areaPath: workItem.fields['System.AreaPath'],
                authorizedAs: workItem.fields['System.AuthorizedAs'],
                authorizedDate: workItem.fields['System.AuthorizedDate'],
                changedBy: workItem.fields['System.ChangedBy'],
                changedDate: workItem.fields['System.ChangedDate'],
                commentCount: workItem.fields['System.CommentCount'],
                createdBy: workItem.fields['System.CreatedBy'],
                createdDate: workItem.fields['System.CreatedDate'],
                description: workItem.fields['System.Description'],
                systemId: workItem.fields['System.Id'],
                iterationId: workItem.fields['System.IterationId'],
                iterationLevel1: workItem.fields['System.IterationLevel1'],
                iterationPath: workItem.fields['System.IterationPath'],
                nodeName: workItem.fields['System.NodeName'],
                parent: workItem.fields['System.Parent'],
                personId: workItem.fields['System.PersonId'],
                reason: workItem.fields['System.Reason'],
                rev: workItem.fields['System.Rev'],
                revisedDate: workItem.fields['System.RevisedDate'],
                state: workItem.fields['System.State'],
                teamProject: workItem.fields['System.TeamProject'],
                title: workItem.fields['System.Title'],
                watermark: workItem.fields['System.Watermark'],
                workItemType: workItem.fields['System.WorkItemType']
            }
        }
        return workItemProto;
    }
}


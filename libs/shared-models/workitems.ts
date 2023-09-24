export interface AzureDevOpsWorkItem {
  count: number;
  value: WorkItem[];
}

export interface WorkItem {
  fields: Fields;
  id: number;
  relations: Relation[];
  rev: number;
  url: string;
}

export interface Fields {
  "Microsoft.VSTS.Common.Priority": number;
  "Microsoft.VSTS.Common.StateChangeDate": string;
  "Microsoft.VSTS.Common.ValueArea": string;
  "Microsoft.VSTS.Scheduling.Effort": number;
  "Microsoft.VSTS.Scheduling.RemainingWork": number;
  "System.AreaId": number;
  "System.AreaLevel1": string;
  "System.AreaPath": string;
  "System.AuthorizedAs": Identity;
  "System.AuthorizedDate": string;
  "System.ChangedBy": Identity;
  "System.ChangedDate": string;
  "System.CommentCount": number;
  "System.CreatedBy": Identity;
  "System.CreatedDate": string;
  "System.Description": string;
  "System.Id": number;
  "System.IterationId": number;
  "System.IterationLevel1": string;
  "System.IterationPath": string;
  "System.NodeName": string;
  "System.Parent": number;
  "System.PersonId": number;
  "System.Reason": string;
  "System.Rev": number;
  "System.RevisedDate": string;
  "System.State": string;
  "System.TeamProject": string;
  "System.Title": string;
  "System.Watermark": number;
  "System.WorkItemType": string;
}

export interface Identity {
  _links: Links;
  descriptor: string;
  displayName: string;
  id: string;
  imageUrl: string;
  uniqueName: string;
  url: string;
}

export interface Links {
  avatar: Href;
}

export interface Href {
  href: string;
}

export interface Relation {
  attributes: RelationAttributes;
  rel: string;
  url: string;
}

export interface RelationAttributes {
  comment: string;
  isLocked: boolean;
  name: string;
}
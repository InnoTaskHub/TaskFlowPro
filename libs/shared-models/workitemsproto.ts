export interface AzureDevOpsWorkItem {
  count?: number;
  value?: WorkItem[];
}

export function encodeAzureDevOpsWorkItem(message: AzureDevOpsWorkItem): Uint8Array {
  let bb = popByteBuffer();
  _encodeAzureDevOpsWorkItem(message, bb);
  return toUint8Array(bb);
}

function _encodeAzureDevOpsWorkItem(message: AzureDevOpsWorkItem, bb: ByteBuffer): void {
  // optional int32 count = 1;
  let $count = message.count;
  if ($count !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($count));
  }

  // repeated WorkItem value = 2;
  let array$value = message.value;
  if (array$value !== undefined) {
    for (let value of array$value) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeWorkItem(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeAzureDevOpsWorkItem(binary: Uint8Array): AzureDevOpsWorkItem {
  return _decodeAzureDevOpsWorkItem(wrapByteBuffer(binary));
}

function _decodeAzureDevOpsWorkItem(bb: ByteBuffer): AzureDevOpsWorkItem {
  let message: AzureDevOpsWorkItem = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 count = 1;
      case 1: {
        message.count = readVarint32(bb);
        break;
      }

      // repeated WorkItem value = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.value || (message.value = []);
        values.push(_decodeWorkItem(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface WorkItem {
  fields?: Fields;
  id?: number;
  relations?: Relation[];
  rev?: number;
  url?: string;
}

export function encodeWorkItem(message: WorkItem): Uint8Array {
  let bb = popByteBuffer();
  _encodeWorkItem(message, bb);
  return toUint8Array(bb);
}

function _encodeWorkItem(message: WorkItem, bb: ByteBuffer): void {
  // optional Fields fields = 1;
  let $fields = message.fields;
  if ($fields !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeFields($fields, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 id = 2;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($id));
  }

  // repeated Relation relations = 3;
  let array$relations = message.relations;
  if (array$relations !== undefined) {
    for (let value of array$relations) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeRelation(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int32 rev = 4;
  let $rev = message.rev;
  if ($rev !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($rev));
  }

  // optional string url = 5;
  let $url = message.url;
  if ($url !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $url);
  }
}

export function decodeWorkItem(binary: Uint8Array): WorkItem {
  return _decodeWorkItem(wrapByteBuffer(binary));
}

function _decodeWorkItem(bb: ByteBuffer): WorkItem {
  let message: WorkItem = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Fields fields = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.fields = _decodeFields(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 id = 2;
      case 2: {
        message.id = readVarint32(bb);
        break;
      }

      // repeated Relation relations = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.relations || (message.relations = []);
        values.push(_decodeRelation(bb));
        bb.limit = limit;
        break;
      }

      // optional int32 rev = 4;
      case 4: {
        message.rev = readVarint32(bb);
        break;
      }

      // optional string url = 5;
      case 5: {
        message.url = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Fields {
  priority?: number;
  stateChangeDate?: string;
  valueArea?: string;
  effort?: number;
  remainingWork?: number;
  areaId?: number;
  areaLevel1?: string;
  areaPath?: string;
  authorizedAs?: Identity;
  authorizedDate?: string;
  changedBy?: Identity;
  changedDate?: string;
  commentCount?: number;
  createdBy?: Identity;
  createdDate?: string;
  description?: string;
  systemId?: number;
  iterationId?: number;
  iterationLevel1?: string;
  iterationPath?: string;
  nodeName?: string;
  parent?: number;
  personId?: number;
  reason?: string;
  rev?: number;
  revisedDate?: string;
  state?: string;
  teamProject?: string;
  title?: string;
  watermark?: number;
  workItemType?: string;
}

export function encodeFields(message: Fields): Uint8Array {
  let bb = popByteBuffer();
  _encodeFields(message, bb);
  return toUint8Array(bb);
}

function _encodeFields(message: Fields, bb: ByteBuffer): void {
  // optional int32 priority = 1;
  let $priority = message.priority;
  if ($priority !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($priority));
  }

  // optional string stateChangeDate = 2;
  let $stateChangeDate = message.stateChangeDate;
  if ($stateChangeDate !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $stateChangeDate);
  }

  // optional string valueArea = 3;
  let $valueArea = message.valueArea;
  if ($valueArea !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $valueArea);
  }

  // optional float effort = 4;
  let $effort = message.effort;
  if ($effort !== undefined) {
    writeVarint32(bb, 37);
    writeFloat(bb, $effort);
  }

  // optional float remainingWork = 5;
  let $remainingWork = message.remainingWork;
  if ($remainingWork !== undefined) {
    writeVarint32(bb, 45);
    writeFloat(bb, $remainingWork);
  }

  // optional int32 areaId = 6;
  let $areaId = message.areaId;
  if ($areaId !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($areaId));
  }

  // optional string areaLevel1 = 7;
  let $areaLevel1 = message.areaLevel1;
  if ($areaLevel1 !== undefined) {
    writeVarint32(bb, 58);
    writeString(bb, $areaLevel1);
  }

  // optional string areaPath = 8;
  let $areaPath = message.areaPath;
  if ($areaPath !== undefined) {
    writeVarint32(bb, 66);
    writeString(bb, $areaPath);
  }

  // optional Identity authorizedAs = 9;
  let $authorizedAs = message.authorizedAs;
  if ($authorizedAs !== undefined) {
    writeVarint32(bb, 74);
    let nested = popByteBuffer();
    _encodeIdentity($authorizedAs, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string authorizedDate = 10;
  let $authorizedDate = message.authorizedDate;
  if ($authorizedDate !== undefined) {
    writeVarint32(bb, 82);
    writeString(bb, $authorizedDate);
  }

  // optional Identity changedBy = 11;
  let $changedBy = message.changedBy;
  if ($changedBy !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodeIdentity($changedBy, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string changedDate = 12;
  let $changedDate = message.changedDate;
  if ($changedDate !== undefined) {
    writeVarint32(bb, 98);
    writeString(bb, $changedDate);
  }

  // optional int32 commentCount = 13;
  let $commentCount = message.commentCount;
  if ($commentCount !== undefined) {
    writeVarint32(bb, 104);
    writeVarint64(bb, intToLong($commentCount));
  }

  // optional Identity createdBy = 14;
  let $createdBy = message.createdBy;
  if ($createdBy !== undefined) {
    writeVarint32(bb, 114);
    let nested = popByteBuffer();
    _encodeIdentity($createdBy, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string createdDate = 15;
  let $createdDate = message.createdDate;
  if ($createdDate !== undefined) {
    writeVarint32(bb, 122);
    writeString(bb, $createdDate);
  }

  // optional string description = 16;
  let $description = message.description;
  if ($description !== undefined) {
    writeVarint32(bb, 130);
    writeString(bb, $description);
  }

  // optional int32 systemId = 17;
  let $systemId = message.systemId;
  if ($systemId !== undefined) {
    writeVarint32(bb, 136);
    writeVarint64(bb, intToLong($systemId));
  }

  // optional int32 iterationId = 18;
  let $iterationId = message.iterationId;
  if ($iterationId !== undefined) {
    writeVarint32(bb, 144);
    writeVarint64(bb, intToLong($iterationId));
  }

  // optional string iterationLevel1 = 19;
  let $iterationLevel1 = message.iterationLevel1;
  if ($iterationLevel1 !== undefined) {
    writeVarint32(bb, 154);
    writeString(bb, $iterationLevel1);
  }

  // optional string iterationPath = 20;
  let $iterationPath = message.iterationPath;
  if ($iterationPath !== undefined) {
    writeVarint32(bb, 162);
    writeString(bb, $iterationPath);
  }

  // optional string nodeName = 21;
  let $nodeName = message.nodeName;
  if ($nodeName !== undefined) {
    writeVarint32(bb, 170);
    writeString(bb, $nodeName);
  }

  // optional int32 parent = 22;
  let $parent = message.parent;
  if ($parent !== undefined) {
    writeVarint32(bb, 176);
    writeVarint64(bb, intToLong($parent));
  }

  // optional int32 personId = 23;
  let $personId = message.personId;
  if ($personId !== undefined) {
    writeVarint32(bb, 184);
    writeVarint64(bb, intToLong($personId));
  }

  // optional string reason = 24;
  let $reason = message.reason;
  if ($reason !== undefined) {
    writeVarint32(bb, 194);
    writeString(bb, $reason);
  }

  // optional int32 rev = 25;
  let $rev = message.rev;
  if ($rev !== undefined) {
    writeVarint32(bb, 200);
    writeVarint64(bb, intToLong($rev));
  }

  // optional string revisedDate = 26;
  let $revisedDate = message.revisedDate;
  if ($revisedDate !== undefined) {
    writeVarint32(bb, 210);
    writeString(bb, $revisedDate);
  }

  // optional string state = 27;
  let $state = message.state;
  if ($state !== undefined) {
    writeVarint32(bb, 218);
    writeString(bb, $state);
  }

  // optional string teamProject = 28;
  let $teamProject = message.teamProject;
  if ($teamProject !== undefined) {
    writeVarint32(bb, 226);
    writeString(bb, $teamProject);
  }

  // optional string title = 29;
  let $title = message.title;
  if ($title !== undefined) {
    writeVarint32(bb, 234);
    writeString(bb, $title);
  }

  // optional int32 watermark = 30;
  let $watermark = message.watermark;
  if ($watermark !== undefined) {
    writeVarint32(bb, 240);
    writeVarint64(bb, intToLong($watermark));
  }

  // optional string workItemType = 31;
  let $workItemType = message.workItemType;
  if ($workItemType !== undefined) {
    writeVarint32(bb, 250);
    writeString(bb, $workItemType);
  }
}

export function decodeFields(binary: Uint8Array): Fields {
  return _decodeFields(wrapByteBuffer(binary));
}

function _decodeFields(bb: ByteBuffer): Fields {
  let message: Fields = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 priority = 1;
      case 1: {
        message.priority = readVarint32(bb);
        break;
      }

      // optional string stateChangeDate = 2;
      case 2: {
        message.stateChangeDate = readString(bb, readVarint32(bb));
        break;
      }

      // optional string valueArea = 3;
      case 3: {
        message.valueArea = readString(bb, readVarint32(bb));
        break;
      }

      // optional float effort = 4;
      case 4: {
        message.effort = readFloat(bb);
        break;
      }

      // optional float remainingWork = 5;
      case 5: {
        message.remainingWork = readFloat(bb);
        break;
      }

      // optional int32 areaId = 6;
      case 6: {
        message.areaId = readVarint32(bb);
        break;
      }

      // optional string areaLevel1 = 7;
      case 7: {
        message.areaLevel1 = readString(bb, readVarint32(bb));
        break;
      }

      // optional string areaPath = 8;
      case 8: {
        message.areaPath = readString(bb, readVarint32(bb));
        break;
      }

      // optional Identity authorizedAs = 9;
      case 9: {
        let limit = pushTemporaryLength(bb);
        message.authorizedAs = _decodeIdentity(bb);
        bb.limit = limit;
        break;
      }

      // optional string authorizedDate = 10;
      case 10: {
        message.authorizedDate = readString(bb, readVarint32(bb));
        break;
      }

      // optional Identity changedBy = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.changedBy = _decodeIdentity(bb);
        bb.limit = limit;
        break;
      }

      // optional string changedDate = 12;
      case 12: {
        message.changedDate = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 commentCount = 13;
      case 13: {
        message.commentCount = readVarint32(bb);
        break;
      }

      // optional Identity createdBy = 14;
      case 14: {
        let limit = pushTemporaryLength(bb);
        message.createdBy = _decodeIdentity(bb);
        bb.limit = limit;
        break;
      }

      // optional string createdDate = 15;
      case 15: {
        message.createdDate = readString(bb, readVarint32(bb));
        break;
      }

      // optional string description = 16;
      case 16: {
        message.description = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 systemId = 17;
      case 17: {
        message.systemId = readVarint32(bb);
        break;
      }

      // optional int32 iterationId = 18;
      case 18: {
        message.iterationId = readVarint32(bb);
        break;
      }

      // optional string iterationLevel1 = 19;
      case 19: {
        message.iterationLevel1 = readString(bb, readVarint32(bb));
        break;
      }

      // optional string iterationPath = 20;
      case 20: {
        message.iterationPath = readString(bb, readVarint32(bb));
        break;
      }

      // optional string nodeName = 21;
      case 21: {
        message.nodeName = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 parent = 22;
      case 22: {
        message.parent = readVarint32(bb);
        break;
      }

      // optional int32 personId = 23;
      case 23: {
        message.personId = readVarint32(bb);
        break;
      }

      // optional string reason = 24;
      case 24: {
        message.reason = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 rev = 25;
      case 25: {
        message.rev = readVarint32(bb);
        break;
      }

      // optional string revisedDate = 26;
      case 26: {
        message.revisedDate = readString(bb, readVarint32(bb));
        break;
      }

      // optional string state = 27;
      case 27: {
        message.state = readString(bb, readVarint32(bb));
        break;
      }

      // optional string teamProject = 28;
      case 28: {
        message.teamProject = readString(bb, readVarint32(bb));
        break;
      }

      // optional string title = 29;
      case 29: {
        message.title = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 watermark = 30;
      case 30: {
        message.watermark = readVarint32(bb);
        break;
      }

      // optional string workItemType = 31;
      case 31: {
        message.workItemType = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Identity {
  _links?: Links;
  descriptor?: string;
  displayName?: string;
  id?: string;
  imageUrl?: string;
  uniqueName?: string;
  url?: string;
}

export function encodeIdentity(message: Identity): Uint8Array {
  let bb = popByteBuffer();
  _encodeIdentity(message, bb);
  return toUint8Array(bb);
}

function _encodeIdentity(message: Identity, bb: ByteBuffer): void {
  // optional Links _links = 1;
  let $_links = message._links;
  if ($_links !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeLinks($_links, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string descriptor = 2;
  let $descriptor = message.descriptor;
  if ($descriptor !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $descriptor);
  }

  // optional string displayName = 3;
  let $displayName = message.displayName;
  if ($displayName !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $displayName);
  }

  // optional string id = 4;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $id);
  }

  // optional string imageUrl = 5;
  let $imageUrl = message.imageUrl;
  if ($imageUrl !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $imageUrl);
  }

  // optional string uniqueName = 6;
  let $uniqueName = message.uniqueName;
  if ($uniqueName !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $uniqueName);
  }

  // optional string url = 7;
  let $url = message.url;
  if ($url !== undefined) {
    writeVarint32(bb, 58);
    writeString(bb, $url);
  }
}

export function decodeIdentity(binary: Uint8Array): Identity {
  return _decodeIdentity(wrapByteBuffer(binary));
}

function _decodeIdentity(bb: ByteBuffer): Identity {
  let message: Identity = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Links _links = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message._links = _decodeLinks(bb);
        bb.limit = limit;
        break;
      }

      // optional string descriptor = 2;
      case 2: {
        message.descriptor = readString(bb, readVarint32(bb));
        break;
      }

      // optional string displayName = 3;
      case 3: {
        message.displayName = readString(bb, readVarint32(bb));
        break;
      }

      // optional string id = 4;
      case 4: {
        message.id = readString(bb, readVarint32(bb));
        break;
      }

      // optional string imageUrl = 5;
      case 5: {
        message.imageUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional string uniqueName = 6;
      case 6: {
        message.uniqueName = readString(bb, readVarint32(bb));
        break;
      }

      // optional string url = 7;
      case 7: {
        message.url = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Links {
  avatar?: Href;
}

export function encodeLinks(message: Links): Uint8Array {
  let bb = popByteBuffer();
  _encodeLinks(message, bb);
  return toUint8Array(bb);
}

function _encodeLinks(message: Links, bb: ByteBuffer): void {
  // optional Href avatar = 1;
  let $avatar = message.avatar;
  if ($avatar !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeHref($avatar, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeLinks(binary: Uint8Array): Links {
  return _decodeLinks(wrapByteBuffer(binary));
}

function _decodeLinks(bb: ByteBuffer): Links {
  let message: Links = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Href avatar = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.avatar = _decodeHref(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Href {
  href?: string;
}

export function encodeHref(message: Href): Uint8Array {
  let bb = popByteBuffer();
  _encodeHref(message, bb);
  return toUint8Array(bb);
}

function _encodeHref(message: Href, bb: ByteBuffer): void {
  // optional string href = 1;
  let $href = message.href;
  if ($href !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $href);
  }
}

export function decodeHref(binary: Uint8Array): Href {
  return _decodeHref(wrapByteBuffer(binary));
}

function _decodeHref(bb: ByteBuffer): Href {
  let message: Href = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string href = 1;
      case 1: {
        message.href = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Relation {
  attributes?: RelationAttributes;
  rel?: string;
  url?: string;
}

export function encodeRelation(message: Relation): Uint8Array {
  let bb = popByteBuffer();
  _encodeRelation(message, bb);
  return toUint8Array(bb);
}

function _encodeRelation(message: Relation, bb: ByteBuffer): void {
  // optional RelationAttributes attributes = 1;
  let $attributes = message.attributes;
  if ($attributes !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeRelationAttributes($attributes, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string rel = 2;
  let $rel = message.rel;
  if ($rel !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $rel);
  }

  // optional string url = 3;
  let $url = message.url;
  if ($url !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $url);
  }
}

export function decodeRelation(binary: Uint8Array): Relation {
  return _decodeRelation(wrapByteBuffer(binary));
}

function _decodeRelation(bb: ByteBuffer): Relation {
  let message: Relation = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional RelationAttributes attributes = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.attributes = _decodeRelationAttributes(bb);
        bb.limit = limit;
        break;
      }

      // optional string rel = 2;
      case 2: {
        message.rel = readString(bb, readVarint32(bb));
        break;
      }

      // optional string url = 3;
      case 3: {
        message.url = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RelationAttributes {
  comment?: string;
  isLocked?: boolean;
  name?: string;
}

export function encodeRelationAttributes(message: RelationAttributes): Uint8Array {
  let bb = popByteBuffer();
  _encodeRelationAttributes(message, bb);
  return toUint8Array(bb);
}

function _encodeRelationAttributes(message: RelationAttributes, bb: ByteBuffer): void {
  // optional string comment = 1;
  let $comment = message.comment;
  if ($comment !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $comment);
  }

  // optional bool isLocked = 2;
  let $isLocked = message.isLocked;
  if ($isLocked !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $isLocked ? 1 : 0);
  }

  // optional string name = 3;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $name);
  }
}

export function decodeRelationAttributes(binary: Uint8Array): RelationAttributes {
  return _decodeRelationAttributes(wrapByteBuffer(binary));
}

function _decodeRelationAttributes(bb: ByteBuffer): RelationAttributes {
  let message: RelationAttributes = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string comment = 1;
      case 1: {
        message.comment = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool isLocked = 2;
      case 2: {
        message.isLocked = !!readByte(bb);
        break;
      }

      // optional string name = 3;
      case 3: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Long {
  low: number;
  high: number;
  unsigned: boolean;
}

interface ByteBuffer {
  bytes: Uint8Array;
  offset: number;
  limit: number;
}

function pushTemporaryLength(bb: ByteBuffer): number {
  let length = readVarint32(bb);
  let limit = bb.limit;
  bb.limit = bb.offset + length;
  return limit;
}

function skipUnknownField(bb: ByteBuffer, type: number): void {
  switch (type) {
    case 0: while (readByte(bb) & 0x80) { } break;
    case 2: skip(bb, readVarint32(bb)); break;
    case 5: skip(bb, 4); break;
    case 1: skip(bb, 8); break;
    default: throw new Error("Unimplemented type: " + type);
  }
}

function stringToLong(value: string): Long {
  return {
    low: value.charCodeAt(0) | (value.charCodeAt(1) << 16),
    high: value.charCodeAt(2) | (value.charCodeAt(3) << 16),
    unsigned: false,
  };
}

function longToString(value: Long): string {
  let low = value.low;
  let high = value.high;
  return String.fromCharCode(
    low & 0xFFFF,
    low >>> 16,
    high & 0xFFFF,
    high >>> 16);
}

// The code below was modified from https://github.com/protobufjs/bytebuffer.js
// which is under the Apache License 2.0.

let f32 = new Float32Array(1);
let f32_u8 = new Uint8Array(f32.buffer);

let f64 = new Float64Array(1);
let f64_u8 = new Uint8Array(f64.buffer);

function intToLong(value: number): Long {
  value |= 0;
  return {
    low: value,
    high: value >> 31,
    unsigned: value >= 0,
  };
}

let bbStack: ByteBuffer[] = [];

function popByteBuffer(): ByteBuffer {
  const bb = bbStack.pop();
  if (!bb) return { bytes: new Uint8Array(64), offset: 0, limit: 0 };
  bb.offset = bb.limit = 0;
  return bb;
}

function pushByteBuffer(bb: ByteBuffer): void {
  bbStack.push(bb);
}

function wrapByteBuffer(bytes: Uint8Array): ByteBuffer {
  return { bytes, offset: 0, limit: bytes.length };
}

function toUint8Array(bb: ByteBuffer): Uint8Array {
  let bytes = bb.bytes;
  let limit = bb.limit;
  return bytes.length === limit ? bytes : bytes.subarray(0, limit);
}

function skip(bb: ByteBuffer, offset: number): void {
  if (bb.offset + offset > bb.limit) {
    throw new Error('Skip past limit');
  }
  bb.offset += offset;
}

function isAtEnd(bb: ByteBuffer): boolean {
  return bb.offset >= bb.limit;
}

function grow(bb: ByteBuffer, count: number): number {
  let bytes = bb.bytes;
  let offset = bb.offset;
  let limit = bb.limit;
  let finalOffset = offset + count;
  if (finalOffset > bytes.length) {
    let newBytes = new Uint8Array(finalOffset * 2);
    newBytes.set(bytes);
    bb.bytes = newBytes;
  }
  bb.offset = finalOffset;
  if (finalOffset > limit) {
    bb.limit = finalOffset;
  }
  return offset;
}

function advance(bb: ByteBuffer, count: number): number {
  let offset = bb.offset;
  if (offset + count > bb.limit) {
    throw new Error('Read past limit');
  }
  bb.offset += count;
  return offset;
}

function readBytes(bb: ByteBuffer, count: number): Uint8Array {
  let offset = advance(bb, count);
  return bb.bytes.subarray(offset, offset + count);
}

function writeBytes(bb: ByteBuffer, buffer: Uint8Array): void {
  let offset = grow(bb, buffer.length);
  bb.bytes.set(buffer, offset);
}

function readString(bb: ByteBuffer, count: number): string {
  // Sadly a hand-coded UTF8 decoder is much faster than subarray+TextDecoder in V8
  let offset = advance(bb, count);
  let fromCharCode = String.fromCharCode;
  let bytes = bb.bytes;
  let invalid = '\uFFFD';
  let text = '';

  for (let i = 0; i < count; i++) {
    let c1 = bytes[i + offset], c2: number, c3: number, c4: number, c: number;

    // 1 byte
    if ((c1 & 0x80) === 0) {
      text += fromCharCode(c1);
    }

    // 2 bytes
    else if ((c1 & 0xE0) === 0xC0) {
      if (i + 1 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        if ((c2 & 0xC0) !== 0x80) text += invalid;
        else {
          c = ((c1 & 0x1F) << 6) | (c2 & 0x3F);
          if (c < 0x80) text += invalid;
          else {
            text += fromCharCode(c);
            i++;
          }
        }
      }
    }

    // 3 bytes
    else if ((c1 & 0xF0) == 0xE0) {
      if (i + 2 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        if (((c2 | (c3 << 8)) & 0xC0C0) !== 0x8080) text += invalid;
        else {
          c = ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
          if (c < 0x0800 || (c >= 0xD800 && c <= 0xDFFF)) text += invalid;
          else {
            text += fromCharCode(c);
            i += 2;
          }
        }
      }
    }

    // 4 bytes
    else if ((c1 & 0xF8) == 0xF0) {
      if (i + 3 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        c4 = bytes[i + offset + 3];
        if (((c2 | (c3 << 8) | (c4 << 16)) & 0xC0C0C0) !== 0x808080) text += invalid;
        else {
          c = ((c1 & 0x07) << 0x12) | ((c2 & 0x3F) << 0x0C) | ((c3 & 0x3F) << 0x06) | (c4 & 0x3F);
          if (c < 0x10000 || c > 0x10FFFF) text += invalid;
          else {
            c -= 0x10000;
            text += fromCharCode((c >> 10) + 0xD800, (c & 0x3FF) + 0xDC00);
            i += 3;
          }
        }
      }
    }

    else text += invalid;
  }

  return text;
}

function writeString(bb: ByteBuffer, text: string): void {
  // Sadly a hand-coded UTF8 encoder is much faster than TextEncoder+set in V8
  let n = text.length;
  let byteCount = 0;

  // Write the byte count first
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    byteCount += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }
  writeVarint32(bb, byteCount);

  let offset = grow(bb, byteCount);
  let bytes = bb.bytes;

  // Then write the bytes
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    if (c < 0x80) {
      bytes[offset++] = c;
    } else {
      if (c < 0x800) {
        bytes[offset++] = ((c >> 6) & 0x1F) | 0xC0;
      } else {
        if (c < 0x10000) {
          bytes[offset++] = ((c >> 12) & 0x0F) | 0xE0;
        } else {
          bytes[offset++] = ((c >> 18) & 0x07) | 0xF0;
          bytes[offset++] = ((c >> 12) & 0x3F) | 0x80;
        }
        bytes[offset++] = ((c >> 6) & 0x3F) | 0x80;
      }
      bytes[offset++] = (c & 0x3F) | 0x80;
    }
  }
}

function writeByteBuffer(bb: ByteBuffer, buffer: ByteBuffer): void {
  let offset = grow(bb, buffer.limit);
  let from = bb.bytes;
  let to = buffer.bytes;

  // This for loop is much faster than subarray+set on V8
  for (let i = 0, n = buffer.limit; i < n; i++) {
    from[i + offset] = to[i];
  }
}

function readByte(bb: ByteBuffer): number {
  return bb.bytes[advance(bb, 1)];
}

function writeByte(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 1);
  bb.bytes[offset] = value;
}

function readFloat(bb: ByteBuffer): number {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f32_u8[0] = bytes[offset++];
  f32_u8[1] = bytes[offset++];
  f32_u8[2] = bytes[offset++];
  f32_u8[3] = bytes[offset++];
  return f32[0];
}

function writeFloat(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  f32[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f32_u8[0];
  bytes[offset++] = f32_u8[1];
  bytes[offset++] = f32_u8[2];
  bytes[offset++] = f32_u8[3];
}

function readDouble(bb: ByteBuffer): number {
  let offset = advance(bb, 8);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f64_u8[0] = bytes[offset++];
  f64_u8[1] = bytes[offset++];
  f64_u8[2] = bytes[offset++];
  f64_u8[3] = bytes[offset++];
  f64_u8[4] = bytes[offset++];
  f64_u8[5] = bytes[offset++];
  f64_u8[6] = bytes[offset++];
  f64_u8[7] = bytes[offset++];
  return f64[0];
}

function writeDouble(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 8);
  let bytes = bb.bytes;
  f64[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f64_u8[0];
  bytes[offset++] = f64_u8[1];
  bytes[offset++] = f64_u8[2];
  bytes[offset++] = f64_u8[3];
  bytes[offset++] = f64_u8[4];
  bytes[offset++] = f64_u8[5];
  bytes[offset++] = f64_u8[6];
  bytes[offset++] = f64_u8[7];
}

function readInt32(bb: ByteBuffer): number {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  );
}

function writeInt32(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  bytes[offset] = value;
  bytes[offset + 1] = value >> 8;
  bytes[offset + 2] = value >> 16;
  bytes[offset + 3] = value >> 24;
}

function readInt64(bb: ByteBuffer, unsigned: boolean): Long {
  return {
    low: readInt32(bb),
    high: readInt32(bb),
    unsigned,
  };
}

function writeInt64(bb: ByteBuffer, value: Long): void {
  writeInt32(bb, value.low);
  writeInt32(bb, value.high);
}

function readVarint32(bb: ByteBuffer): number {
  let c = 0;
  let value = 0;
  let b: number;
  do {
    b = readByte(bb);
    if (c < 32) value |= (b & 0x7F) << c;
    c += 7;
  } while (b & 0x80);
  return value;
}

function writeVarint32(bb: ByteBuffer, value: number): void {
  value >>>= 0;
  while (value >= 0x80) {
    writeByte(bb, (value & 0x7f) | 0x80);
    value >>>= 7;
  }
  writeByte(bb, value);
}

function readVarint64(bb: ByteBuffer, unsigned: boolean): Long {
  let part0 = 0;
  let part1 = 0;
  let part2 = 0;
  let b: number;

  b = readByte(bb); part0 = (b & 0x7F); if (b & 0x80) {
    b = readByte(bb); part0 |= (b & 0x7F) << 7; if (b & 0x80) {
      b = readByte(bb); part0 |= (b & 0x7F) << 14; if (b & 0x80) {
        b = readByte(bb); part0 |= (b & 0x7F) << 21; if (b & 0x80) {

          b = readByte(bb); part1 = (b & 0x7F); if (b & 0x80) {
            b = readByte(bb); part1 |= (b & 0x7F) << 7; if (b & 0x80) {
              b = readByte(bb); part1 |= (b & 0x7F) << 14; if (b & 0x80) {
                b = readByte(bb); part1 |= (b & 0x7F) << 21; if (b & 0x80) {

                  b = readByte(bb); part2 = (b & 0x7F); if (b & 0x80) {
                    b = readByte(bb); part2 |= (b & 0x7F) << 7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    low: part0 | (part1 << 28),
    high: (part1 >>> 4) | (part2 << 24),
    unsigned,
  };
}

function writeVarint64(bb: ByteBuffer, value: Long): void {
  let part0 = value.low >>> 0;
  let part1 = ((value.low >>> 28) | (value.high << 4)) >>> 0;
  let part2 = value.high >>> 24;

  // ref: src/google/protobuf/io/coded_stream.cc
  let size =
    part2 === 0 ?
      part1 === 0 ?
        part0 < 1 << 14 ?
          part0 < 1 << 7 ? 1 : 2 :
          part0 < 1 << 21 ? 3 : 4 :
        part1 < 1 << 14 ?
          part1 < 1 << 7 ? 5 : 6 :
          part1 < 1 << 21 ? 7 : 8 :
      part2 < 1 << 7 ? 9 : 10;

  let offset = grow(bb, size);
  let bytes = bb.bytes;

  switch (size) {
    case 10: bytes[offset + 9] = (part2 >>> 7) & 0x01;
    case 9: bytes[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;
    case 8: bytes[offset + 7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
    case 7: bytes[offset + 6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
    case 6: bytes[offset + 5] = size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F;
    case 5: bytes[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;
    case 4: bytes[offset + 3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
    case 3: bytes[offset + 2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
    case 2: bytes[offset + 1] = size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F;
    case 1: bytes[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
  }
}

function readVarint32ZigZag(bb: ByteBuffer): number {
  let value = readVarint32(bb);

  // ref: src/google/protobuf/wire_format_lite.h
  return (value >>> 1) ^ -(value & 1);
}

function writeVarint32ZigZag(bb: ByteBuffer, value: number): void {
  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint32(bb, (value << 1) ^ (value >> 31));
}

function readVarint64ZigZag(bb: ByteBuffer): Long {
  let value = readVarint64(bb, /* unsigned */ false);
  let low = value.low;
  let high = value.high;
  let flip = -(low & 1);

  // ref: src/google/protobuf/wire_format_lite.h
  return {
    low: ((low >>> 1) | (high << 31)) ^ flip,
    high: (high >>> 1) ^ flip,
    unsigned: false,
  };
}

function writeVarint64ZigZag(bb: ByteBuffer, value: Long): void {
  let low = value.low;
  let high = value.high;
  let flip = high >> 31;

  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint64(bb, {
    low: (low << 1) ^ flip,
    high: ((high << 1) | (low >>> 31)) ^ flip,
    unsigned: false,
  });
}

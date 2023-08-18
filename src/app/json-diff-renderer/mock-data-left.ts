export const leftJson = {
  customMetadata: [
    {
      customFieldGroup: {
        id: 'ed1dc01a-edd0-49e8-ad55-a25e8713e532',
        name: 'CFG1',
        order: 1,
        jsonDefinition:
          '[{"key": "ownersAddress", "type": "textfield", "input": true, "label": "Owner\'s address", "tableView": true}, {"key": "verified", "type": "checkbox", "input": true, "label": "Address is verified", "tableView": false, "properties": {"textValueWhenChecked": "verified", "textValueWhenUnChecked": "not verified"}}, {"key": "addressType", "data": {"values": [{"label": "Residential", "value": "residential"}, {"label": "Official", "value": "official"}]}, "type": "select", "input": true, "label": "Address Type", "widget": "choicesjs", "tableView": true}, {"key": "addressCode", "type": "radio", "input": true, "label": "Address Code", "inline": false, "values": [{"label": "20334", "value": "20334", "shortcut": ""}, {"label": "34933", "value": "34933", "shortcut": ""}], "tableView": false, "optionsLabelPosition": "right"}]',
      },
      metadata: {
        ownersAddress: null,
        verified: null,
        addressType: null,
        addressCode: null,
      },
      order: 1,
      fieldGroupId: 'ed1dc01a-edd0-49e8-ad55-a25e8713e532',
      form: {
        components: [
          {
            key: 'ownersAddress',
            type: 'textfield',
            input: true,
            label: "Owner's Address",
            tableView: false,
          },
          {
            key: 'verified',
            type: 'checkbox',
            input: true,
            label: 'Address is verified',
            tableView: false,
            properties: {
              textValueWhenChecked: 'Verified',
              textValueWhenUnChecked: 'not verified',
            },
          },
          {
            key: 'addressType',
            data: {
              values: [
                {
                  label: 'Residential',
                  value: 'residential',
                },
                {
                  label: 'Official',
                  value: 'official',
                },
              ],
            },
            type: 'select',
            input: true,
            label: 'Address Type',
            widget: 'choicesjs',
            tableView: true,
          },
          {
            key: 'addressCode',
            type: 'radio',
            input: true,
            label: 'Address Code',
            inline: false,
            values: [
              {
                label: '20334',
                value: '20334',
                shortcut: '',
              },
              {
                label: '34933',
                value: '34933',
                shortcut: null,
              },
            ],
            tableView: false,
            optionsLabelPosition: 'right',
          },
        ],
      },
    },
  ],
  conditionForRRR: [],
  isPrimaryRrr: true,
  serviceCancelRRR: [],
  cancellationNotations: [],
  rrrCollection: {
    createdBy: 'Ram Nivas K',
    createdDate: '2022-10-13T11:48:38.757061Z',
    lastModifiedBy: 'Ram Nivas K',
    lastModifiedDate: '2022-11-04T07:52:48.447369Z',
    id: 'c1d4f643-f796-4a68-bc24-56271da83785',
    name: 'N-Transfer II',
    notationTemplate:
      '<RRR> - II has been registered with the share values <Share(s)>  supported by documents <Document ID(s)> which confirms the transfer for <Declared Value>. ',
    description: 'Transfer of ownership for notation',
    customFieldGroups: [
      {
        id: 'ed1dc01a-edd0-49e8-ad55-a25e8713e532',
        name: 'CFG1',
        order: 2,
        jsonDefinition:
          '[{"key": "ownersAddress", "type": "textfield", "input": true, "label": "Owner\'s address", "tableView": true}, {"key": "verified", "type": "checkbox", "input": true, "label": "Address is verified", "tableView": false, "properties": {"textValueWhenChecked": "verified", "textValueWhenUnChecked": "not verified"}}, {"key": "addressType", "data": {"values": [{"label": "Residential", "value": "residential"}, {"label": "Official", "value": "official"}]}, "type": "select", "input": true, "label": "Address Type", "widget": "choicesjs", "tableView": true}, {"key": "addressCode", "type": "radio", "input": true, "label": "Address Code", "inline": false, "values": [{"label": "20334", "value": "20334", "shortcut": ""}, {"label": "34933", "value": "34933", "shortcut": ""}], "tableView": false, "optionsLabelPosition": "right"}]',
      },
    ],
    documentsRequired: [],
    rrrs: [
      {
        id: '24406516-5e1a-4cad-b57d-ed18527d66cc',
        name: 'N-Crownland.',
        isReferredByOthers: true,
      },
      {
        id: '316bc6fe-cb09-4524-b3e4-99322908a500',
        name: 'Leasehold',
        isReferredByOthers: true,
      },
      {
        id: '1e2983a7-a1d4-4198-9b1c-ad04a6f60dc2',
        name: 'Crownland',
        isReferredByOthers: false,
      },
      {
        id: '746d8591-ce14-4296-821f-69e92f322a1e',
        name: 'N-Leasehold',
        isReferredByOthers: true,
      },
      {
        id: 'b5763e78-ebb8-4296-a0c0-da4a3f7e7a15',
        name: 'N-Freehold',
        isReferredByOthers: true,
      },
      {
        id: '0fb3cd7f-015d-4927-9694-7be91346eb10',
        name: 'Freehold',
        isReferredByOthers: true,
      },
    ],
    categoryType: 'RIGHTS',
    rightHolderType: 'SHAREDRIGHTHOLDERS',
    loanType: 'NONE',
    condition: false,
    isPrimary: true,
    isCancel: false,
    isReferredByOthers: true,
    status: true,
    isDeclaredValue: true,
    cancelRRR: null,
    cancelRRRCollections: [],
    availableInTarget: false,
  },
  lease: null,
  mortgage: null,
  partyIds: [],
  parties: [],
  rrrListId: '746d8591-ce14-4296-821f-69e92f322a1e',
  rrrParties: [
    {
      partyIds: [],
      share: null,
      id: null,
      localId: 'afbb2c5d-8d48-87fa-615a-6ece93c34122',
      order: null,
    },
  ],
  shares: [],
  sources: [],
  sourceIds: [],
  sourceGeneratedIds: [],
  documents: [],
  documentsToRegister: [],
  cancellableRrrs: [],
  dirty: false,
  validations: [],
  localId: '5753824c-1401-d7de-f7cb-11018a22619d',
  rrrCollectionId: 'c1d4f643-f796-4a68-bc24-56271da83785',
  rrrListName: 'N-Leasehold',
  primary: true,
  declaredValue: 0,
  rrrType: 'TitleRRR',
  order: 1,
  registeredDocumentUUIDs: '',
  ui: {
    validation: {
      validationMessages: [
        {
          message: 'Declared value not provided',
          severity: 'Critical',
        },
        {
          message: 'Rightholder(s) not selected',
          severity: 'Critical',
        },
      ],
      rrrId: '5753824c-1401-d7de-f7cb-11018a22619d',
      rrrName: 'N-Leasehold',
    },
    localId: '5753824c-1401-d7de-f7cb-11018a22619d',
    validationState: 'invalid',
    accordionStatus: 'closed',
  },
};

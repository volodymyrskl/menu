import Node from "./types/node.interface";

const treeData: Node = {
  text: 'Root',
  children: [
    {
      text: 'Node 1',
      children: [
        {
          text: 'Node 1.1',
          children: [
            {
              text: 'Node 1.1.1',
              children: [],
            },
            {
              text: 'Node 1.1.2',
              children: [],
            },
          ],
        },
        {
          text: 'Node 1.2',
          children: [],
        },
      ],
    },
    {
      text: 'Node 2',
      children: [],
    },
    {
      text: 'Node 3',
      children: [],
    },
  ],
};

export default treeData;

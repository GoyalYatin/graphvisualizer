loadData(
    {
        name: 'Event Driven Chain',
        nodes: [
            { id: 'subscribe', value: { label: 'subscribe' } },
            { id: 'extract', value: { label: 'extract' } },
            { id: 'process', value: { label: 'process' } },
            { id: 'load', value: { label: 'load' } },
            { id: 'diff', value: { label: 'diff' } },
            { id: 'load-diff', value: { label: 'load-diff' } },
            { id: 'establish-relationship', value: { label: 'establish-relationship' } },
            { id: 'load-relationship', value: { label: 'load-relationship' } },
            { id: 'publish', value: { label: 'publish' } }
        ],
        links: [
            { u: 'subscribe', v: 'extract', value: { label: 'subscribed' } },
			{ u: 'extract', v: 'process', value: { label: 'extracted' } },
            { u: 'process', v: 'load', value: { label: 'processed' } },
			{ u: 'process', v: 'diff', value: { label: 'processed' } },
			{ u: 'process', v: 'establish-relationship', value: { label: 'processed' } },
			{ u: 'diff', v: 'load-diff', value: { label: 'diff-identified' } },
			{ u: 'diff', v: 'publish', value: { label: 'ready-to-publish' } },
			{ u: 'establish-relationship', v: 'publish', value: { label: 'ready-to-publish' } },
			{ u: 'establish-relationship', v: 'load-relationship', value: { label: 'relationship-defined' } },
        ]
    }
);
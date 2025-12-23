import React from 'react';

interface TableOfContentsProps {
    sections: Record<string, React.RefObject<HTMLDivElement>>;
    onNavigate: (section: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections, onNavigate }) => {
    const tocItems = [
        { id: 'components', label: 'Components' },
        { id: 'jsx', label: 'JSX' },
        { id: 'hooks', label: 'Hooks' },
        { id: 'state', label: 'State Management' },
        { id: 'props', label: 'Props' },
        { id: 'context', label: 'Context API' },
        { id: 'routing', label: 'Routing' },
        { id: 'testing', label: 'Testing' },
        { id: 'performance', label: 'Performance' },
    ];

    return (
        <nav className="toc">
            <h3>Table of Contents</h3>
            <ul className="toc-list">
                {tocItems.map((item) => (
                    <li key={item.id} className="toc-item">
                        <button
                            className="toc-link"
                            onClick={() => onNavigate(item.id)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
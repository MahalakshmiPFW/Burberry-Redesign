import { useState } from 'react';
import { trenchStyles } from '../data/trenchStyles';
import { StyleCard } from '../components/StyleCard';

type Department = 'Women' | 'Men';

export function ComparisonPage() {
  const [department, setDepartment] = useState<Department>('Women');

  return (
    <div className="screen" data-screen="Trench comparison">
      <div className="compare-header">
        <div>
          <span className="eyebrow">The Trench</span>
          <h1>Six silhouettes. One heritage.</h1>
          <p>
            Every trench, compared by fit, length and the era it draws from —
            one page, not two menus.
          </p>
        </div>
        <div className="department-toggle" role="group" aria-label="Department">
          {(['Women', 'Men'] as Department[]).map((dept) => (
            <button
              key={dept}
              type="button"
              className={department === dept ? 'active' : ''}
              onClick={() => setDepartment(dept)}
              aria-pressed={department === dept}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div className="compare-grid">
        {trenchStyles.map((style) => (
          <StyleCard key={style.slug} style={style} />
        ))}
      </div>
    </div>
  );
}

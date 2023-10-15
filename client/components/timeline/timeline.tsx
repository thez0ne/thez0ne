'use client'

import { useLayoutEffect } from 'react';
import { TimelineItem } from './timelineitem';

function Timeline(props: any) {
  const { className, data } = props;
  const fullClassName = `timeline-container timeline-wrapper ${className || ''}`;
  const numItems = data.length;

  useLayoutEffect(() => {
    let css = '';
    for (let i = 1; i <= numItems; i += 1) {
      css += `.timeline-item:nth-child(${i}) {grid-row: ${i};}`;
    }

    document.head.insertAdjacentHTML(
      'beforeend',
      `<style data-timeline-styles>${css}</style>`
    );

    return () => {
      document.querySelector('[data-timeline-styles]')!.remove();
    };
  }, [numItems]);

  return (
    <div className={fullClassName}>
      <div className='timeline-connector' />
      <ul className='timeline'>
        {data.map((data: any, index: number) => (
          <TimelineItem data={data} key={index} />
        ))}

        {Array(numItems)
          .fill(0)
          .map((_, i) => (
            <span key={i} className='timeline-dotmark'>
              <div className='timeline-dot' />
            </span>
          ))}
      </ul>
    </div>
  );
}

export { Timeline };

import type { CSSProperties } from 'react';
import type { FloorplanFloor } from '../../lib/homeSecurityFunnel';
import { getRoomFurnishings } from './floorplanFurnishings';

const roomLayerStyles: CSSProperties = {
  position: 'absolute',
  pointerEvents: 'none',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  zIndex: 0,
};

const furnishingBaseStyles: CSSProperties = {
  position: 'absolute',
  background: 'rgba(240, 244, 250, 0.12)',
  border: '1px solid rgba(240, 244, 250, 0.28)',
  boxShadow: 'inset 0 0 0 1px rgba(15, 19, 32, 0.2)',
};

type FloorplanFurnishingsProps = {
  floor: FloorplanFloor;
};

const FloorplanFurnishings = ({ floor }: FloorplanFurnishingsProps) => {
  return (
    <div aria-hidden="true">
      {floor.rooms.map((room) => {
        const furnishings = getRoomFurnishings(room);
        if (!furnishings.length) return null;
        return (
          <div
            key={`furnishings-${room.id}`}
            style={{
              ...roomLayerStyles,
              left: room.rect.x,
              top: room.rect.y,
              width: room.rect.w,
              height: room.rect.h,
            }}
          >
            {furnishings.map((item) => {
              const style: CSSProperties = {
                ...furnishingBaseStyles,
                left: `${item.xPct * 100}%`,
                top: `${item.yPct * 100}%`,
                width: `${item.wPct * 100}%`,
                height: `${item.hPct * 100}%`,
                transform: item.rotation ? `rotate(${item.rotation}deg)` : undefined,
                borderRadius: item.shape === 'circle' ? '999px' : item.shape === 'round' ? '0.4rem' : '0.2rem',
                opacity: item.kind === 'plant' ? 0.55 : 0.7,
              };

              const detailStyle: CSSProperties = {
                position: 'absolute',
                inset: '18% 22%',
                borderRadius: '999px',
                border: '1px solid rgba(240, 244, 250, 0.35)',
                opacity: 0.7,
              };

              return (
                <div key={`${room.id}-${item.id}`} style={style}>
                  {item.kind === 'sink' || item.kind === 'dining_table' ? (
                    <span style={detailStyle} />
                  ) : null}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FloorplanFurnishings;

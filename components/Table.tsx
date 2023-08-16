import {
  RuxStatus,
  RuxTable,
  RuxTableBody,
  RuxTableCell,
  RuxTableHeader,
  RuxTableHeaderCell,
  RuxTableHeaderRow,
  RuxTableRow,
  RuxTag,
  RuxTooltip,
} from '@astrouxds/react';

type Status = 'off' | 'standby' | 'normal' | 'caution' | 'serious' | 'critical';

const data: { label: string; value: number; status: Status }[] = [
  {
    label: '1st Floor Inside',
    value: 70.2,
    status: 'normal',
  },
  {
    label: '1st Floor Outside',
    value: 90.2,
    status: 'serious',
  },
  {
    label: '2nd Floor Inside',
    value: 71.2,
    status: 'normal',
  },
  {
    label: '2nd Floor Outside',
    value: 95.2,
    status: 'serious',
  },
  {
    label: '3rd Floor Inside',
    value: 75.2,
    status: 'caution',
  },
  {
    label: '3rd Floor Outside',
    value: 97.7,
    status: 'critical',
  },
];

export const Table = ({ withDiv = false }: { withDiv?: boolean }) => (
  <div className="flex flex-col gap-2">
    <h1 className="text-2xl font-bold w-full text-center">
      {withDiv ? 'With' : 'Without'} <code>{'<div>'}</code>
    </h1>
    <RuxTable>
      <RuxTableHeader>
        <RuxTableHeaderRow>
          <RuxTableHeaderCell>Location</RuxTableHeaderCell>
          <RuxTableHeaderCell>Temperature (&deg;F)</RuxTableHeaderCell>
          <RuxTableHeaderCell>Status</RuxTableHeaderCell>
        </RuxTableHeaderRow>
      </RuxTableHeader>
      <RuxTableBody>
        {data.map((row, i) => (
          <RuxTableRow key={i}>
            <RuxTableCell>{row.label}</RuxTableCell>
            <RuxTableCell>
              <RuxTooltip
                message="Hey, here's a tooltip!"
                placement="left"
                delay={200}
              >
                {/* ! block-level elements inside a tooltip render weird */}
                {withDiv ? <div>{row.value}</div> : row.value}
              </RuxTooltip>
            </RuxTableCell>
            <RuxTableCell>
              <RuxStatus status={row.status} />
            </RuxTableCell>
          </RuxTableRow>
        ))}
      </RuxTableBody>
    </RuxTable>
  </div>
);

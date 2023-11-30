import { chartLinearGradient, customTooltips } from '@/components/utilities/utilities';
import chartContent from '@/demoData/dashboardChartContent.json';
import { useCallback, useEffect, useState } from 'react';
import { PerformanceChartWrapper, Pstates } from '../../style';
import { Cards } from '@/components/cards/frame/cards-frame';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import Heading from '@/components/heading/heading';
import { Spin } from 'antd';
import { ChartjsAreaChart } from '@/components/charts/chartjs';

const moreContent = (
    <>
        <Link href="#">
            <FeatherIcon size={16} icon="printer" />
            <span>Printer</span>
        </Link>
        <Link href="#">
            <FeatherIcon size={16} icon="book-open" />
            <span>PDF</span>
        </Link>
        <Link href="#">
            <FeatherIcon size={16} icon="file-text" />
            <span>Google Sheets</span>
        </Link>
        <Link href="#">
            <FeatherIcon size={16} icon="x" />
            <span>Excel (XLSX)</span>
        </Link>
        <Link href="#">
            <FeatherIcon size={16} icon="file" />
            <span>CSV</span>
        </Link>
    </>
);

export const AverageSalesRevenueAdmin = () => {

    const [performanceState, setPerformanceState] = useState<{
        performanceState: any;
        preIsLoading: boolean;
    }>({
        performanceState: chartContent.performance,
        preIsLoading: false,
    })

    const [state, setState] = useState<{
        performance: 'week' | 'year' | 'month';
        performanceTab: 'users' | 'sessions' | 'bounce' | 'duration' | 'labels'
    }>({
        performance: 'year',
        performanceTab: 'users',
    });

    const { performance, performanceTab } = state;

    const handleActiveChangePerformance = (value: 'year' | 'month' | 'week') => {
        setState({
            ...state,
            performance: value,
        });
        setPerformanceState({ ...performanceState, preIsLoading: true })
        setTimeout(() => {
            setPerformanceState({ ...performanceState, preIsLoading: false, performanceState: chartContent.performance[value] })
        }, 2000);
    };

    const onPerformanceTab = useCallback((value: 'users' | 'sessions' | 'bounce' | 'duration' | 'labels') => {
        setState({
            ...state,
            performanceTab: value,
        });
    }, [state]);

    const performanceDatasets = performanceState.performanceState !== null ? [
        {
            data: performanceState.performanceState[performanceTab]
                && performanceState.performanceState[performanceTab][1],
            borderColor: '#5F63F2',
            borderWidth: 4,
            fill: true,
            backgroundColor: () =>
                chartLinearGradient(document.getElementById('performance'), 300, {
                    start: '#5F63F230',
                    end: '#ffffff05',
                }),
            label: 'Current period',
            pointStyle: 'circle',
            pointRadius: '0',
            hoverRadius: '9',
            pointBorderColor: '#fff',
            pointBackgroundColor: '#5F63F2',
            hoverBorderWidth: 5,
        },
        {
            data: performanceState.performanceState[performanceTab] &&
                performanceState.performanceState[performanceTab][2],
            borderColor: '#C6D0DC',
            borderWidth: 2,
            fill: false,
            backgroundColor: '#00173750',
            label: 'Previous period',
            borderDash: [3, 3],
            pointRadius: '0',
            hoverRadius: '0',
        },
    ] : [];

    useEffect(() => {
        setPerformanceState({ ...performanceState, preIsLoading: true })
        setTimeout(() => {
            setPerformanceState({ ...performanceState, preIsLoading: false, performanceState: chartContent.performance[performance] })
        }, 500);
    }, [])

    return (
        <PerformanceChartWrapper>
            {performanceState.performanceState !== null && (
                <Cards
                    isbutton={
                        <div className="card-nav">
                            <ul>
                                <li className={performance === 'week' ? 'active' : 'deactivate'}>
                                    <Link onClick={() => handleActiveChangePerformance('week')} href="#">
                                        Week
                                    </Link>
                                </li>
                                <li className={performance === 'month' ? 'active' : 'deactivate'}>
                                    <Link onClick={() => handleActiveChangePerformance('month')} href="#">
                                        Month
                                    </Link>
                                </li>
                                <li className={performance === 'year' ? 'active' : 'deactivate'}>
                                    <Link onClick={() => handleActiveChangePerformance('year')} href="#">
                                        Year
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                    more={moreContent}
                    title="Average Sales Revenue"
                    size="large"
                >
                    <Pstates>
                        <div
                            onClick={() => onPerformanceTab('users')}
                            className={`growth-upward ${performanceTab === 'users' && 'active'}`}
                            role="button"
                            onKeyPress={() => { }}
                            tabIndex={0}
                        >
                            <p>This Month Revenue</p>
                            <Heading as="h1">
                                {performanceState.performanceState.users && performanceState.performanceState.users[0]}
                                <sub>
                                    <span>
                                        <FeatherIcon icon="arrow-up" size={14} /> 25%
                                    </span>
                                </sub>
                            </Heading>
                        </div>
                        <div
                            onClick={() => onPerformanceTab('sessions')}
                            className={`growth-upward ${performanceTab === 'sessions' && 'active'}`}
                            role="button"
                            onKeyPress={() => { }}
                            tabIndex={0}
                        >
                            <p>Last Month Revenue</p>
                            <Heading as="h1">
                                {performanceState.performanceState.sessions && performanceState.performanceState.sessions[0]}
                                <sub>
                                    <span>
                                        <FeatherIcon icon="arrow-up" size={14} /> 47%
                                    </span>
                                </sub>
                            </Heading>
                        </div>
                    </Pstates>
                    {performanceState.preIsLoading ? (
                        <div className="sd-spin">
                            <Spin />
                        </div>
                    ) : (
                        <div className="performance-lineChart">
                            <ChartjsAreaChart
                                id="performance"
                                labels={performanceState.performanceState.labels}
                                datasets={performanceDatasets}
                                options={{
                                    maintainAspectRatio: true,
                                    elements: {
                                        z: 9999,
                                    },
                                    legend: {
                                        display: false,
                                    },
                                    hover: {
                                        mode: 'index',
                                        intersect: false,
                                    },
                                    tooltips: {
                                        mode: 'label',
                                        intersect: false,
                                        backgroundColor: '#ffffff',
                                        position: 'average',
                                        enabled: false,
                                        custom: customTooltips,
                                        callbacks: {
                                            title() {
                                                return performanceTab;
                                            },
                                            label(t: any, d: any) {
                                                const { yLabel, datasetIndex } = t;
                                                return `<span class="chart-data">${yLabel}k</span> <span class="data-label">${d.datasets[datasetIndex].label}</span>`;
                                            },
                                        },
                                    },
                                    scales: {
                                        yAxes: [
                                            {
                                                gridLines: {
                                                    color: '#e5e9f2',
                                                    borderDash: [3, 3],
                                                    zeroLineColor: '#e5e9f2',
                                                    zeroLineWidth: 1,
                                                    zeroLineBorderDash: [3, 3],
                                                },
                                                ticks: {
                                                    beginAtZero: true,
                                                    fontSize: 13,
                                                    fontColor: '#182b49',
                                                    max: 80,
                                                    stepSize: 20,
                                                    callback(label: any) {
                                                        return `${label}k`;
                                                    },
                                                },
                                            },
                                        ],
                                        xAxes: [
                                            {
                                                gridLines: {
                                                    display: true,
                                                    zeroLineWidth: 2,
                                                    zeroLineColor: 'transparent',
                                                    color: 'transparent',
                                                    z: 1,
                                                    tickMarkLength: 0,
                                                },
                                                ticks: {
                                                    padding: 10,
                                                },
                                            },
                                        ],
                                    },
                                }}
                                height={window.innerWidth <= 575 ? 200 : 100}
                            />
                            <ul>
                                {performanceDatasets &&
                                    performanceDatasets.map((item, index) => {
                                        return (
                                            <li key={index + 1} className="custom-label">
                                                <span
                                                    style={{
                                                        backgroundColor: item.borderColor,
                                                    }}
                                                />
                                                {item.label}
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    )}
                </Cards>
            )}
        </PerformanceChartWrapper>
    )
}
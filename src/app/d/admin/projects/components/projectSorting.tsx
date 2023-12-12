import FeatherIcon from 'feather-icons-react';
import { Select } from "antd";
import { ProjectHeader, ProjectSorting } from '../style';
import Link from "next/link";
import { useState } from "react";
import { AutoComplete } from '@/components/autoComplete/autoComplete';
import { useServices } from '@/hooks';


export const ProjectSortingComponent = () => {

    const searchData: [] = [];

    const {serviceData} = useServices({enableFetchServices: true});

    const [state, setState] = useState({
        notData: [],
        categoryActive: 'all',
    });

    const { notData } = state;

    const handleSearch = (searchText: any) => {
        const data = searchData.filter((item: any) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
        setState({
            ...state,
            notData: data,
        });
    };

    const onChangeCategory = (value: any) => {
        setState({
            ...state,
            categoryActive: value,
        });
    };

    const onSorting = (selectedItems: any) => { }

    return (
        <ProjectSorting>
            <div className="project-sort-bar">
                <div className="project-sort-nav">
                    <nav>
                        <ul>
                            <li className={state.categoryActive === 'all' ? 'active' : 'deactivate'}>
                                <Link onClick={() => onChangeCategory('all')} href="#">
                                    All
                                </Link>
                            </li>
                            <li className={state.categoryActive === 'progress' ? 'active' : 'deactivate'}>
                                <Link onClick={() => onChangeCategory('progress')} href="#">
                                    In Progress
                                </Link>
                            </li>
                            <li className={state.categoryActive === 'complete' ? 'active' : 'deactivate'}>
                                <Link onClick={() => onChangeCategory('complete')} href="#">
                                    Complete
                                </Link>
                            </li>
                            <li className={state.categoryActive === 'late' ? 'active' : 'deactivate'}>
                                <Link onClick={() => onChangeCategory('late')} href="#">
                                    Active
                                </Link>
                            </li>
                            <li className={state.categoryActive === 'early' ? 'active' : 'deactivate'}>
                                <Link onClick={() => onChangeCategory('early')} href="#">
                                    Disabled
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="project-sort-search">
                    <AutoComplete onSearch={handleSearch} dataSource={notData} placeholder="Search projects" patterns />
                </div>
                <div className="project-sort-group">
                    <div className="sort-group">
                        <span>Sort By:</span>
                        <Select onChange={onSorting} defaultValue="category">
                            <Select.Option value="category">Project Services</Select.Option>
                            {serviceData.map((el, i) => (
                                <Select.Option value={el.id} key={i}>{el.title}</Select.Option>
                            ))}
                        </Select>
                        <div className="layout-style">
                            <Link href="#">
                                <FeatherIcon icon="grid" size={16} />
                            </Link>
                            <Link href="#">
                                <FeatherIcon icon="list" size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectSorting>
    )
}
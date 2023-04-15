import React, { useEffect } from 'react'
import { useAppSelector } from '@redux/hooks'
import RenderRoutePage from '@routes/components/RenderRoutePage'
import createClassName from '@utils/createClassName'
import Layout from '../../Layout'
import ScrollReset from '../../Common/ScrollReset'
import SnackbarAlert from '../../Feedback/SnackbarAlert'
import './styles.scss'
import { PageRenderProps } from './types'

const PageRender: React.FC <PageRenderProps> = ({ children, pageKey, ...props }) => {

    const { sidebarOpen } = useAppSelector(s => s.app)

    const wrapperClasses = createClassName([props.type ?? 'default'], [sidebarOpen && 'sidebar-open'])

    useEffect(() => {
        document.title = props.title ?? 'Title Not Provided'
    }, [props.title, props.path])

    return(

        <div id = "wrapper" className = {wrapperClasses} data-page = {props.path}>
            <ScrollReset />
            {(['center', 'error', 'form'].includes(props.type ?? 'default') && (
                <Layout.Center name = {props.name ?? ''}>
                    {children ?? <RenderRoutePage name = {pageKey!} />}
                </Layout.Center>
            )) || (
                <Layout.Default name = {props.name ?? ''}>
                    {children ?? <RenderRoutePage name = {pageKey!} />}
                </Layout.Default>
            )}
            <SnackbarAlert />
        </div>

    )

}

export default React.memo(PageRender, (prevProps, nextProps) => {
    return (
        prevProps.path === nextProps.path &&
        prevProps.type === nextProps.type &&
        prevProps.userVerification === nextProps.userVerification &&
        prevProps.authVerification === nextProps.authVerification
    )
})
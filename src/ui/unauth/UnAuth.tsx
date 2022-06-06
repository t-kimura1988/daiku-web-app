import React from "react";
import {useMediaQueryContext} from "../../context/MediaContext";
import {Card, Container, Typography} from "@material-ui/core";

export const UnAuth = () => {
    const {isMobile, isTablet, isPc} = useMediaQueryContext()

    if(isMobile) {
        return (
                <Mobile />
        )
    }

    if(isTablet) {
        return (
                <Tablet />
        )}

    if(isPc) {
        return (
                <Pc />
        )}

    return <Pc />

}

const Mobile = () => {
    return (
        <Container>
            <MainTitle />
            <MainBody />
            <Card>
                <GoalImg />
                <GoalBody />
            </Card>
            <Card>
                <ProcessImg />
                <ProcessBody />
            </Card>
            <Card>
                <TaskImg />
                <TaskBody />
            </Card>
            <Card>
                <ResolveImg />
                <ResolveBody />
            </Card>
        </Container>
    )
}

const Tablet = () => {
    return(
        <div>
            <MainTitle />
            <MainBody />
        </div>
    )
}

const Pc = () => {
    return(
        <Container>
            <MainTitle />
            <MainBody />
        </Container>
    )
}


const MainTitle = () => {
    return (
        <Typography
            variant="h3"
            color="inherit"
        >
            自分が立てた目標を達成しよう
        </Typography>
    )
}

const MainBody = () => {

    return (
        <Typography
            variant="body1"
            color="inherit"
        >
            <ul>
                <li>最終的にどういうふうになりたいかのイメージ</li>
                <li>そのイメージを実現するための道筋</li>
                <li>課題の解決</li>
            </ul>
            これらを１つの目標として作成<br />
            また整理できるようにし<br />あなたの目標達成のフォローをします。

        </Typography>
    )
}

const GoalImg = () => {
    return (
        <img src={`${process.env.PUBLIC_URL}/assets/goal_mobile.png`} alt="Logo" />
    )
}

const ProcessImg = () => {
    return (
        <img src={`${process.env.PUBLIC_URL}/assets/process_mobile.png`} alt="Logo" />
    )
}

const TaskImg = () => {
    return (
        <img src={`${process.env.PUBLIC_URL}/assets/task_mobile.png`} alt="Logo" />
    )
}

const ResolveImg = () => {
    return (
        <img src={`${process.env.PUBLIC_URL}/assets/resolve_mobile.png`} alt="Logo" />
    )
}

const GoalBody = () => {
    return (
        <Typography
            variant="body1"
            color="inherit"
        >
            まずは目標を決めること<br />
            ざっくりで良いので自分がイメージした目標を作成します。
            細かいことは気にせず、ざっくりとした記載で大丈夫です。ただし、決めたことは達成するまでなるべく変えないことをお勧めします。
            また、いつまで達成するか期日を決めると良いです。
        </Typography>

    )
}

const ProcessBody = () => {
    return (
        <Typography
            variant="body1"
            color="inherit"
        >
            決めた目標を達成するまでの工程の作成<br />
            目標達成にたどり着くまでの道筋となります。
            この道筋を最初に作成することで、最速で目標達成することができます。
        </Typography>

    )
}

const TaskBody = () => {
    return (
        <Typography
            variant="body1"
            color="inherit"
        >
            問題発生<br />
            実際に作業すると問題が発生することもあります。
            発生した問題はしっかりと記載し問題解決に備えましょう。
        </Typography>

    )
}

const ResolveBody = () => {
    return (
        <Typography
            variant="body1"
            color="inherit"
        >
            問題解決力<br />
            しっかりと問題を解決できるようにしましょう。

        </Typography>

    )
}
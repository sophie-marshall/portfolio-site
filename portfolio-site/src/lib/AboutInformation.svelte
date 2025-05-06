<div class="about-information">
    <div class="section">
        <div class="section-header">
            * name
        </div>
        <div class="section-subheader">
            [first, last]
        </div>
        <div class="section-content">
            Sophie Marshall
        </div>
    </div>
    <div class="section">
        <div class="section-header">
            * companies
        </div>
        <div class="section-subheader">
            [name, title]
        </div>
        <div class="section-content">
            <p>PBS, Data Engineer</p>
            <p>Hive AI, Analyst</p>
            <p>Education Analytics, Research Analyst</p>
        </div>
    </div>  
    <div class="section">
        <div class="section-header">
            * education
        </div>
        <div class="section-subheader">
            [institution, degree]
        </div>
        <div class="section-content">
            <p>University of Wisconsin, Economics</p>
            <p>University of Wisconsin, Psychology</p>
        </div>
    </div>  
    <div class="section">
        <div class="section-header">
            * skills
        </div>
        <div class="section-subheader">
            [title, proficiency]
        </div>
        <div class="section-content">
            <p>Python, Advanced</p>
            <p>SQL, Advanced</p>
            <p>Airflow, Intermediate</p>
            <p>Web Development, Intermediate</p>
            <p>Machine Learning, Beginner</p>
        </div>
    </div>  
</div>


<style>
    .about-information {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 50px;
    }

    .section {
        display: flex;
        flex-direction: column;
    }

    .section-header {
        font-size: 20px;
        color: var(--secondary-purple);
    }

    .section-subheader {
        padding-left: 14px;
        font-size: 10px;
        color:var(--accent-purple);
    }

    .section-content {
        display: flex;
        flex-direction: column;
        font-size: 36px;
        line-height: 150%;
        color: var(--secondary-purple)
    }

    p {
        padding: 0;   
        margin: 0;
    }
</style>
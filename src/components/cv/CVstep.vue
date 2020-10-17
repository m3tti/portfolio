<template>
    <div class="cvstep">
        <div class="cvstep-title">
            {{ duration }}
        </div>
        <div class="cvstep-content">
            <div class="cvstep-detail-content">
                <div class="cvstep-detail-title">
                    {{ company }}
                </div>
                <div class="cvstep-detail-role">
                    {{ role }}
                </div>
                <div class="cvstep-detail-technologies">
                    {{ joinedTechnologies() }}
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: "cvstep" })
export default class CVstep extends Vue {
    @Prop(String) duration: string;
    @Prop(String) company: string;
    @Prop(String) role: string;
    @Prop(Array) technologies: Array<string>;

    joinedTechnologies() {
        return this.technologies.join(", ");
    }
}
</script>
<style lang="scss">
.cvstep {
    display: flex;
    width: 710px;
    margin: auto;
}

.cvstep-title {
    padding-top: 60px;
    font-weight: 900;
    font-size: 20px;
    border-right: 2px solid #0c0c0c;
    padding-right: 20px;
    width: 250px;
}

.cvstep-content {
    padding-top: 60px;
    padding-bottom: 20px;
    padding-left: 40px;
    width: 400px;
}

.cvstep-detail-title {
    font-size: 20px;
    font-weight: 900;
}

.cvstep-detail-role {
    font-size: 20px;
    font-weight: 100;
}

.cvstep-detail-technologies {
    margin-top: 25px;
    font-size: 20px;
    font-weight: 100;
}

.cvstep-detail-content {

}
</style>
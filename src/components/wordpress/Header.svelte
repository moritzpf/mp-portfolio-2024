<script lang="ts">
    import type { cmsBlock } from "../../helper/WordpressBlocks";

    export let blockData: cmsBlock;

    console.log(blockData)
</script>

<section
    class="section section-demo-screens-wall section-fullheight text-center overflow-hidden js-screens-wall"
    data-arts-component-name="ScreensWall"
    data-arts-os-animation="true"
>
    <div class="section-fullheight__inner">
        <div class="d-flex justify-content-between section-demo-screens-wall__wrapper-lanes js-screens-wall__list-container">
            <!-- Screens [left lane] -->
            <div class="col-6 col-lg-4 d-flex ms-1 ms-md-2">
                <div class="col-12 h-100 d-flex flex-column js-screens-wall__list-lane">
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-1.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-2.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-3.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-4.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-5.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-6.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <!-- <div
                    class="col-6 h-100 d-flex flex-column js-screens-wall__list-lane"
                    data-arts-infinite-list-options="{'{'}inverse: true{'}'}"
                >
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-7.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-8.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-9.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-10.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-11.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-12.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="col-6 col-lg-4 d-flex me-1 me-md-2">
                <!-- <div class="col-6 h-100 d-flex flex-column js-screens-wall__list-lane">
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-13.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-14.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-15.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-16.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-17.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-18.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                </div> -->
                <div
                    class="col-12 h-100 d-flex flex-column js-screens-wall__list-lane"
                    data-arts-infinite-list-options="{'{'}inverse: true{'}'}"
                >
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-19.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-20.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-21.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-22.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-23.jpg"
                                width="600"
                                height="336"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="w-100 d-block p-1 p-md-2 js-screens-wall__list-item">
                        <div class="img-wrapper">
                            <img
                                class="lazy of-contain"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100%25'%20height='100%25'%3E%3C/svg%3E"
                                decoding="async"
                                data-src="img/assets/section/sectionDemo/demo-screen-24.jpg"
                                width="600"
                                height="1020"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-demo-screens-wall__overlay overlay overlay_theme-from-bottom-to-top"></div>
        </div>
        <div class="container section__content" data-arts-component-name="Content" data-arts-os-animation="true">
            <div data-arts-split-text-preset="animatedChars" class="header-logo-wrapper">
                <!-- <h1 class="display-xl color-accent my-0">Asli</h1> -->
                <img src="https://aod-admin.moritzpfeffermedia.de/wp-content/uploads/2024/03/Ebene-0.png" class="header-logo" alt="" data-arts-os-animation-name="animatedJumpScale"/>
            </div>
            <div class="mt-2" data-arts-split-text-preset="animatedLines">
                <div class="h6 text-white">AJAX Portfolio HTML5 Template</div>
            </div>
            <div class="mt-md-5 mt-4">
                <div class="d-inline-block" data-arts-os-animation-name="animatedJumpScale">
                    <div
                        class="rotating-button js-rotating-button"
                        data-arts-component-name="RotatingButton"
                        data-arts-component-options="{'{'}{'}'}"
                        data-arts-os-animation="true"
                    >
                        <a
                            class="rotating-button__link subheading js-rotating-button__link"
                            href="#about"
                            rel="nofollow"
                            data-arts-cursor-follower-target="{'{'}color: 'transparent', scale: 'current'{'}'}"
                        >
                            <div class="rotating-button__label js-rotating-button__label text-white">View Demo</div>
                            <div class="rotating-button__icon js-rotating-button__icon text-white">
                                <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <polygon
                                        transform="translate(10.000000, 9.160254) rotate(-330.000000) translate(-10.000000, -9.160254) "
                                        points="9 -0.839745962 11 -0.839745962 11 19.160254 9 19.160254"
                                    ></polygon>
                                    <polygon
                                        transform="translate(10.000000, 9.160254) rotate(-30.000000) translate(-10.000000, -9.160254) "
                                        points="9 -0.839745962 11 -0.839745962 11 19.160254 9 19.160254"
                                    ></polygon>
                                    <polygon
                                        transform="translate(10.000000, 9.160254) rotate(-90.000000) translate(-10.000000, -9.160254) "
                                        points="9 -0.839745962 11 -0.839745962 11 19.160254 9 19.160254"
                                    ></polygon>
                                </svg>
                            </div></a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<style>
    .header-logo {
        width: 100%;
        max-width: 300px;
    }
    .header-logo-wrapper {
        display: flex;
        justify-content: center;
    }
    .text-white {
        color: white;
    }

    @media (max-width: 768px) {
        .header-logo {
            max-width: 200px;
        }
    }
</style>
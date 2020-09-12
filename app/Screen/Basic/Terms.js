import React, {Component} from 'react';
import {Text, View, Dimensions, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../Component';
import Theme from '../../constants/Theme';
const {width, height} = Dimensions.get('screen');
export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <Header />
        <StatusBar
          backgroundColor={Theme.COLORS.SEADARK}
          barStyle="light-content"
        />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingVertical: 10,
          }}>
          {'Term & Conditions'.toUpperCase()}
        </Text>
        <ScrollView>
          <Text
            style={{
              paddingHorizontal: 10,
              textAlign: 'justify',
              fontSize: 16,
              marginBottom: width,
            }}>
            1. CONTRACTUAL RELATIONSHIP These Terms of Use (“Terms”) govern the
            access or use by you, an individual, from within any country in the
            world (excluding the United States and its territories and
            possessions and Mainland China) of applications, websites, content,
            products, and services (the “Services”) made available by Eredox
            Pty, T/A Floatsta.com. Eredox Pty Ltd private limited company
            established in Australia, having its offices at 10 Eagle street
            (level 19) Brisbane 4000, Queensland (“Floatsta”). PLEASE READ THESE
            TERMS CAREFULLY BEFORE ACCESSING OR USING THE SERVICES. Your access
            and use of the Services constitutes your agreement to be bound by
            these Terms, which establishes a contractual relationship between
            you and Floatsta. If you do not agree to these Terms, you may not
            access or use the Services. These Terms expressly supersede prior
            agreements or arrangements with you. Floatsta may restrict you from
            accessing or using the Services, or any part of them, immediately,
            without notice, in circumstances where Floatsta reasonably suspects
            that: (a) you have, or are likely to, breach these Terms; and/or (b)
            you do not, or are likely not to, qualify, under applicable law or
            the standards and policies of Floatsta and its affiliates, to access
            and use the Services. Floatsta may terminate these Terms or any
            Services with respect to you, or generally cease offering or deny
            access to the Services or any portion thereof: (a) immediately,
            where Floatsta reasonably suspects that: (i) you have, or are likely
            to, materially breach these Terms; and/or (ii) you do not, or are
            likely not to, qualify, under applicable law or the standards and
            policies of Floatsta and its affiliates, to access and use the
            Services; or (b) on 30 days' written notice to you, where Floatsta,
            acting reasonably, terminates these Terms or any Services for any
            legitimate business, legal or regulatory reason. Without limiting
            its other rights under these Terms, Floatsta may immediately
            restrict or deactivate your access to the Services if you breach the
            Community Guidelines at any time. You may terminate these Terms at
            any time, for any reason. Supplemental terms may apply to certain
            Services, such as policies for a particular event, activity or
            promotion, and such supplemental terms will be disclosed to you in
            connection with the applicable Services. Supplemental terms are in
            addition to, and shall be deemed a part of, the Terms for the
            purposes of the applicable Services. Supplemental terms shall
            prevail over these Terms in the event of a conflict with respect to
            the applicable Services. Floatsta may amend the Terms, any policies
            or supplemental terms (including the Community Guidelines) related
            to the Services from time to time. Floatsta will provide you with at
            least 30 days' written notice in the event of a material change to
            any Terms, policies or supplemental terms that detrimentally affects
            your rights under these Terms. Amendments will be effective upon
            Floatsta’s posting of such updated Terms at this location or the
            amended policies or supplemental terms on the applicable Service.
            Your continued access or use of the Services after such posting, or
            after the expiry of the notice period (whichever is later),
            constitutes your consent to be bound by the Terms, as amended. Our
            collection and use of personal information in connection with the
            Services is as provided in Floatsta’s Privacy Policy located at
            https://www.Floatsta.com/legal. Floatsta may provide to a claims
            processor or an insurer any necessary information (including your
            contact information) if there is a complaint, dispute or conflict,
            which may include an accident, involving you and a Third Party
            Provider (including a transportation network company driver) and
            such information or data is necessary to resolve the complaint,
            dispute or conflict. 2. THE SERVICES Floatsta will provide the
            Services to you under this Agreement. The Services constitute the
            provision of a technology platform that enables you, as a user of
            Floatsta’s mobile applications or websites (each, an “Application”)
            to: (a) arrange and schedule transportation services or delivery
            services with independent third party providers of those services,
            who have an agreement with Floatsta or its affiliates (“Third Party
            Providers”); and (b) facilitate payments to Third Party Providers
            for the services and receive receipts for those payments. The
            Services are made available solely for your personal, recreational
            non-commercial use, unless Floatsta has agreed with you otherwise in
            a separate agreement. You acknowledge that Floatsta does not provide
            transportation or delivery services or function as a transportation
            carrier and that all such transportation or delivery services are
            provided by independent third party contractors who are not employed
            by Floatsta or any of its affiliates. Floatsta accepts liability for
            the Services and Application that it provides to you subject to
            these Terms. Third Party Providers are responsible for the services
            they provide to you. License. Subject to your compliance with these
            Terms, Floatsta grants you a limited, non-exclusive, non-sub
            licensable, revocable, non-transferrable license to: (i) access and
            use the Applications on your personal device solely in connection
            with your use of the Services; and (ii) access and use any content,
            information and related materials that may be made available through
            the Services, in each case solely for your personal, non-commercial
            use. Any rights not expressly granted herein are reserved by
            Floatsta and Floatsta’s licensors. Restrictions. You may not: (i)
            remove any copyright, trademark or other proprietary notices from
            any portion of the Services; (ii) reproduce, modify, prepare
            derivative works based upon, distribute, license, lease, sell,
            resell, transfer, publicly display, publicly perform, transmit,
            stream, broadcast or otherwise exploit the Services except as
            expressly permitted by Floatsta; (iii) decompile, reverse engineer
            or disassemble the Services except as may be permitted by applicable
            law; (iv) link to, mirror or frame any portion of the Services; (v)
            cause or launch any programs or scripts for the purpose of scraping,
            indexing, surveying, or otherwise data mining any portion of the
            Services or unduly burdening or hindering the operation and/or
            functionality of any aspect of the Services; or (vi) attempt to gain
            unauthorized access to or impair any aspect of the Services or its
            related systems or networks. Provision of the Services. You
            acknowledge that portions of the Services may be made available
            under Floatsta’s various brands or request options associated with
            transportation or delivery services, including the transportation
            request brands currently referred to as “Floatsta,” You also
            acknowledge that the Services may be made available under such
            brands or request options by or in connection with: (i) certain of
            Floatsta’s subsidiaries and affiliates; or (ii) independent Third
            Party Providers, including Chartered transportation network company
            Skippers/drivers, transportation charter permit holders or holders
            of similar transportation permits, authorisations or licenses. Third
            Party Services and Content. The Services may be made available or
            accessed in connection with third party services and content
            (including advertising) that Floatsta does not control. You
            acknowledge that different terms of use and privacy policies may
            apply to your use of such third party services and content. Floatsta
            does not endorse such third party services and content and in no
            event shall Floatsta be responsible or liable for any products or
            services of such third party providers. Additionally, Apple Inc.,
            Google, Inc., Microsoft Corporation or BlackBerry Limited and/or
            their applicable international subsidiaries and affiliates will be
            third-party beneficiaries to this contract if you access the
            Services using Applications developed for Apple iOS, Android,
            Microsoft Windows, or Blackberry-powered mobile devices,
            respectively. These third party beneficiaries are not parties to
            this contract and are not responsible for the provision or support
            of the Services in any manner. Your access to the Services using
            these devices is subject to terms set forth in the applicable third
            party beneficiary’s terms of service. Ownership. The Services and
            all rights therein are and shall remain Floatsta’s property or the
            property of Floatsta’s licensors. Neither these Terms nor your use
            of the Services convey or grant to you any rights: (i) in or related
            to the Services except for the limited license granted above; or
            (ii) to use or reference in any manner Floatsta’s company names,
            logos, product and service names, trademarks or services marks or
            those of Floatsta’s licensors. 3. YOUR USE OF THE SERVICES User
            Accounts. In order to use most aspects of the Services, you must
            register for and maintain an active personal user Services account
            (“Account”). You must be at least 18 years of age, or the age of
            legal majority in your jurisdiction (if different than 18), to
            obtain an Account, unless a specific Service permits otherwise.
            Account registration requires you to submit to Floatsta certain
            personal information, such as your name, address, mobile phone
            number and age, as well as at least one valid payment method (either
            a credit card or accepted payment partner). You agree to maintain
            accurate, complete, and up-to-date information in your Account. Your
            failure to maintain accurate, complete, and up-to-date Account
            information, including having an invalid or expired payment method
            on file, may result in your inability to access or use the Services.
            You are responsible for all activity that occurs under your Account,
            and you agree to maintain the security and secrecy of your Account
            username and password at all times. Unless otherwise permitted by
            Floatsta in writing, you may only possess one Account. User
            Requirements and Conduct. The Service is not available for use by
            persons under the age of 18. You may not authorize third parties to
            use your Account, and you may not allow persons under the age of 18
            to receive transportation or delivery services from Third Party
            Providers unless they are accompanied by you. You may not assign or
            otherwise transfer your Account to any other person or entity. You
            agree to comply with all applicable laws when accessing or using the
            Services, and you may only access or use the Services for lawful
            purposes (e.g., no transport of unlawful or hazardous materials).
            You will not, in your use of the Services, cause nuisance,
            annoyance, inconvenience, or property damage, whether to the Third
            Party Provider or any other party. In certain instances you may be
            asked to provide proof of identity or other method of identity
            verification to access or use the Services, and you agree that you
            may be denied access to or use of the Services if you refuse to
            provide proof of identity or other method of identity verification.
            Commercial Electronic Messaging. By creating an Account, you agree
            that Floatsta or its affiliates may send you commercial electronic
            messages (including email, SMS or push notifications, where
            applicable) as part of the normal business operation of your use of
            the Services. You agree that Floatsta and its affiliates are not
            required to include an unsubscribe message in commercial electronic
            messages where it may be impracticable (including for push
            notifications). However, you may opt-out of receiving commercial
            electronic messages from Floatsta at any time by following the
            directions found at http://t.Floatsta.com/unsub-preference. You also
            acknowledge that opting out of receiving commercial electronic
            messages may impact your use of the Services. You cannot unsubscribe
            from transactional messages, including trip receipts and support
            responses. These communications are important for your experience.
            Promotional Codes. Floatsta may, in Floatsta’s sole discretion,
            create promotional codes that may be redeemed for Account credit, or
            other features or benefits related to the Services and/or a Third
            Party Provider’s services, subject to any additional terms that
            Floatsta establishes on a per promotional code basis (“Promo
            Codes”). You agree that Promo Codes: (i) must be used for the
            intended audience and purpose, and in a lawful manner; (ii) may not
            be duplicated, sold or transferred in any manner, or made available
            to the general public (whether posted to a public form or
            otherwise), unless expressly permitted by Floatsta; (iii) may be
            disabled by Floatsta at any time for any reason without liability to
            Floatsta; (iv) may only be used pursuant to the specific terms that
            Floatsta establishes for such Promo Code; (v) are not valid for
            cash; and (vi) may expire prior to your use. Floatsta reserves the
            right to withhold or deduct credits or other features or benefits
            obtained through the use of Promo Codes by you or any other user in
            the event that Floatsta reasonably determines or believes that the
            use or redemption of the Promo Code was in error, fraudulent,
            illegal, or in violation of the applicable Promo Code terms or these
            Terms. User Provided Content. Floatsta may, in Floatsta’s sole
            discretion, permit you from time to time to submit, upload, publish
            or otherwise make available to Floatsta through the Services
            textual, audio, and/or visual content and information, including
            commentary and feedback related to the Services, initiation of
            support requests, and submission of entries for competitions and
            promotions (“User Content”). Any User Content provided by you
            remains your property. However, by providing User Content to
            Floatsta, you grant Floatsta a worldwide, perpetual, irrevocable,
            transferable, royalty-free license, with the right to sublicense, to
            use, copy, modify, create derivative works of, distribute, publicly
            display, publicly perform, and otherwise exploit in any manner such
            User Content in all formats and distribution channels now known or
            hereafter devised (including in connection with the Services and
            Floatsta’s business and on third-party sites and services), without
            further notice to or consent from you, and without the requirement
            of payment to you or any other person or entity. You represent and
            warrant that: (i) you either are the sole and exclusive owner of all
            User Content or you have all rights, licenses, consents and releases
            necessary to grant Floatsta the license to the User Content as set
            forth above; and (ii) neither the User Content nor your submission,
            uploading, publishing or otherwise making available of such User
            Content nor Floatsta’s use of the User Content as permitted herein
            will infringe, misappropriate or violate a third party’s
            intellectual property or proprietary rights, or rights of publicity
            or privacy, or result in the violation of any applicable law or
            regulation. You agree to not provide User Content that is
            defamatory, libellous, hateful, violent, obscene, pornographic,
            unlawful, or otherwise offensive, as determined by Floatsta in its
            sole discretion, whether or not such material may be protected by
            law. Floatsta may, but shall not be obligated to, review, monitor,
            or remove User Content, at Floatsta’s sole discretion and at any
            time and for any reason, without notice to you. Network Access and
            Devices. You are responsible for obtaining the data network access
            necessary to use the Services. Your mobile network’s data and
            messaging rates and fees may apply if you access or use the Services
            from a wireless-enabled device and you shall be responsible for such
            rates and fees. You are responsible for acquiring and updating
            compatible hardware or devices necessary to access and use the
            Services and Applications and any updates thereto. Floatsta does not
            guarantee that the Services, or any portion thereof, will function
            on any particular hardware or devices. In addition, the Services may
            be subject to malfunctions and delays inherent in the use of the
            Internet and electronic communications. 4. PAYMENT You understand
            that use of the Services may result in charges to you for the
            services or goods you receive from a Third Party Provider
            (“Charges”). After you have received services or goods obtained
            through your use of the Service, Floatsta will facilitate your
            payment of the applicable Charges on behalf of the Third Party
            Provider as such Third Party Provider’s limited payment collection
            agent. Payment of the Charges in such manner shall be considered the
            same as payment made directly by you to the Third Party Provider.
            Charges will be inclusive of applicable taxes where required by law.
            Charges paid by you are final and non-refundable, unless otherwise
            determined by Floatsta or required by the Australian Consumer Law.
            Under the Australian Consumer Law, you may be entitled to a refund
            for a major failure of the Services, or other remedies for a minor
            failure. You retain the right to request lower Charges from a Third
            Party Provider for services or goods received by you from such Third
            Party Provider at the time you receive such services or goods.
            Floatsta will respond accordingly to any request from a Third Party
            Provider to modify the Charges for a particular service or good. All
            Charges are due immediately and payment will be facilitated by
            Floatsta using the preferred payment method designated in your
            Account, after which Floatsta will send you a receipt by email. If
            your primary Account payment method is determined to be expired,
            invalid or otherwise not able to be charged, you agree that Floatsta
            may, as the Third Party Provider’s limited payment collection agent,
            use a secondary payment method in your Account, if available. As
            between you and Floatsta, Floatsta reserves the right to establish,
            remove and/or revise Charges for any or all services or goods
            obtained through the use of the Services at any time in Floatsta’s
            sole discretion. Further, you acknowledge and agree that Charges
            applicable in certain geographical areas may increase substantially
            during times of high demand. Floatsta will use reasonable efforts to
            inform you of Charges that may apply, provided that you will be
            responsible for Charges incurred under your Account regardless of
            your awareness of such Charges or the amounts thereof. Floatsta may
            from time to time provide certain users with promotional offers and
            discounts that may result in different amounts charged for the same
            or similar services or goods obtained through the use of the
            Services, and you agree that such promotional offers and discounts,
            unless also made available to you, shall have no bearing on your use
            of the Services or the Charges applied to you. You may elect to
            cancel your request for services or goods from a Third Party
            Provider at any time prior to such Third Party Provider’s arrival,
            in which case you may be charged a cancellation fee. This payment
            structure is intended to fully compensate the Third Party Provider
            for the services or goods provided. Except with respect to taxicab
            transportation services requested through the Application, Floatsta
            does not designate any portion of your payment as a tip or gratuity
            to the Third Party Provider. Any representation by Floatsta (on
            Floatsta’s website, in the Application, or in Floatsta’s marketing
            materials) to the effect that tipping is “voluntary,” “not
            required,” and/or “included” in the payments you make for services
            or goods provided is not intended to suggest that Floatsta provides
            any additional amounts, beyond those described above, to the Third
            Party Provider. You understand and agree that, while you are free to
            provide additional payment as a gratuity to any Third Party Provider
            who provides you with services or goods obtained through the
            Service, you are under no obligation to do so. Gratuities are
            voluntary. After you have received services or goods obtained
            through the Service, you will have the opportunity to rate your
            experience and leave additional feedback about your Third Party
            Provider. Repair or Cleaning Fees. You shall be responsible for the
            cost of repair for damage to, or necessary cleaning of, Third Party
            Provider boat and property resulting from use of the Services under
            your Account in excess of normal “wear and tear” damages and
            necessary cleaning (“Repair or Cleaning”). In the event that a Third
            Party Provider reports the need for Repair or Cleaning, and such
            Repair or Cleaning request is verified by Floatsta in Floatsta’s
            reasonable discretion, Floatsta reserves the right to facilitate
            payment for the reasonable cost of such Repair or Cleaning on behalf
            of the Third Party Provider using your payment method designated in
            your Account. Such amounts will be transferred by Floatsta to the
            applicable Third Party Provider and are non-refundable. 5.
            DISCLAIMERS; LIMITATION OF LIABILITY; INDEMNITY. LIMITATION SUBJECT
            TO LOCAL CONSUMER LAW THE LIMITATIONS AND DISCLAIMER IN THIS SECTION
            5 DO NOT PURPORT TO LIMIT LIABILITY OR ALTER YOUR RIGHTS AS A
            CONSUMER THAT CANNOT BE EXCLUDED UNDER APPLICABLE LAW, INCLUDING THE
            AUSTRALIAN CONSUMER LAW. DISCLAIMER. EXCEPT AS REQUIRED OF FLOATSTA
            UNDER THE CONSUMER GUARANTEES, THE SERVICES ARE PROVIDED “AS IS” AND
            “AS AVAILABLE.” FLOATSTA DISCLAIMS ALL REPRESENTATIONS AND
            WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, NOT EXPRESSLY SET OUT IN
            THESE TERMS, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT, AND MAKES NO
            REPRESENTATION, WARRANTY, OR GUARANTEE REGARDING THE RELIABILITY,
            TIMELINESS, QUALITY, SUITABILITY OR AVAILABILITY OF THE SERVICES OR
            ANY SERVICES OR GOODS REQUESTED THROUGH THE USE OF THE SERVICES, OR
            THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. FLOATSTA DOES
            NOT GUARANTEE THE QUALITY, SUITABILITY, SAFETY OR ABILITY OF THIRD
            PARTY PROVIDERS. YOU AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR
            USE OF THE SERVICES, AND ANY SERVICE OR GOOD REQUESTED IN CONNECTION
            THEREWITH, REMAINS SOLELY WITH YOU, TO THE MAXIMUM EXTENT PERMITTED
            UNDER APPLICABLE LAW, INCLUDING THE AUSTRALIAN CONSUMER LAW.
            LIMITATION OF LIABILITY. IF YOU ARE ACQUIRING THE GOODS OR SERVICES
            AS A CONSUMER, FLOATSTA'S LIABILITY FOR A FAILURE TO COMPLY WITH A
            CONSUMER GUARANTEE IS LIMITED TO: (A) IN THE CASE OF GOODS SUPPLIED
            TO YOU AS PART OF THE SERVICES UNDER THIS AGREEMENT, THE REPLACEMENT
            OF THE RELEVANT GOODS OR THE REPAIR OF THE GOODS, OR THE PAYMENT OF
            THE COST OF REPLACING THE GOODS OR OF ACQUIRING EQUIVALENT GOODS;
            AND (B) IN THE CASE OF SERVICES SUPPLIED TO YOU AS PART OF THE
            SERVICES UNDER THIS AGREEMENT, THE SUPPLY OF THE RELEVANT SERVICES
            AGAIN, OR THE PAYMENT OF THE COST OF RESUPPLYING THE SERVICES.
            FLOATSTA'S LIABILITY TO YOU FOR A BREACH OF ANY CONDITION, WARRANTY
            OR TERM OF THIS AGREEMENT THAT IS NOT A BREACH OF A CONSUMER
            GUARANTEE IS LIMITED IN THE FOLLOWING WAY: FLOATSTA SHALL NOT BE
            LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR
            CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST DATA, PERSONAL
            INJURY OR PROPERTY DAMAGE RELATED TO, IN CONNECTION WITH, OR
            OTHERWISE RESULTING FROM ANY USE OF THE SERVICES, EVEN IF FLOATSTA
            HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. FLOATSTA SHALL
            NOT BE LIABLE FOR ANY DAMAGES, LIABILITY OR LOSSES ARISING OUT OF:
            (i) YOUR USE OF OR RELIANCE ON THE SERVICES OR YOUR INABILITY TO
            ACCESS OR USE THE SERVICES; OR (ii) ANY TRANSACTION OR RELATIONSHIP
            BETWEEN YOU AND ANY THIRD PARTY PROVIDER, EVEN IF FLOATSTA HAS BEEN
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. FLOATSTA SHALL NOT BE
            LIABLE FOR DELAY OR FAILURE IN PERFORMANCE RESULTING FROM CAUSES
            BEYOND FLOATSTA’S REASONABLE CONTROL. YOU ACKNOWLEDGE THAT THIRD
            PARTY TRANSPORTATION PROVIDERS PROVIDING TRANSPORTATION SERVICES
            REQUESTED THROUGH SOME REQUEST BRANDS MAY OFFER RIDESHARING OR
            PEER-TO-PEER TRANSPORTATION SERVICES AND MAY NOT BE PROFESSIONALLY
            LICENSED OR PERMITTED. IN NO EVENT SHALL FLOATSTA’S TOTAL LIABILITY
            TO YOU IN CONNECTION WITH THE SERVICES FOR ALL DAMAGES, LOSSES AND
            CAUSES OF ACTION EXCEED ONE THOUSAND AUSTRALIAN DOLLARS ($1,000).
            FLOATSTA’S SERVICES MAY BE USED BY YOU TO REQUEST AND SCHEDULE
            TRANSPORTATION, GOODS OR DELIVERY SERVICES WITH THIRD PARTY
            PROVIDERS, BUT YOU AGREE THAT FLOATSTA HAS NO RESPONSIBILITY OR
            LIABILITY TO YOU RELATED TO ANY TRANSPORTATION, GOODS OR DELIVERY
            SERVICES PROVIDED TO YOU BY THIRD PARTY PROVIDERS OTHER THAN AS
            EXPRESSLY SET FORTH IN THESE TERMS. FLOATSTA WILL MAINTAIN A
            COMPLAINTS MANAGEMENT FRAMEWORK, AND WILL MANAGE THIS FRAMEWORK ON
            BEHALF OF THIRD PARTY PROVIDERS, IN A REASONABLE WAY AND IN
            ACCORDANCE WITH THE NON-EXCLUDABLE REQUIREMENTS OF THE AUSTRALIAN
            CONSUMER LAW. THE LIMITATIONS AND DISCLAIMER IN THIS SECTION 5 DO
            NOT PURPORT TO LIMIT LIABILITY OR ALTER YOUR RIGHTS AS A CONSUMER
            THAT CANNOT BE EXCLUDED UNDER APPLICABLE LAW, INCLUDING ANY OF THE
            NON-EXCLUDABLE REQUIREMENTS OF THE AUSTRALIAN CONSUMER LAW.
            Indemnity. You agree to indemnify and hold Floatsta and its
            affiliates and their officers, directors, employees and agents
            harmless from any and all claims, demands, losses, liabilities, and
            expenses (including attorneys’ fees) arising out of or in connection
            with: (i) your use of the Services or services or goods obtained
            through your use of the Services; (ii) your breach or violation of
            any of these Terms; (iii) Floatsta’s use of your User Content; or
            (iv) your violation of the rights of any third party, including
            Third Party Providers ("Losses"). Your liability under this clause
            shall be reduced proportionately if, and to the extent that,
            Floatsta directly caused or contributed to any such Losses. 6.
            GOVERNING LAW; ARBITRATION. There are a number of mechanisms
            available to you to resolve any dispute, conflict, claim or
            controversy arising out of or broadly in connection with or relating
            to the Services or these Terms, including those relating to its
            validity, its construction or its enforceability (any “Dispute”).
            Floatsta or its affiliate operates a complaints process to allow you
            to make complaints about Floatsta or Third Party Providers, and
            Floatsta or its affiliate also manages refunds to you in relation to
            those complaints. Floatsta or its affiliate will operate this
            complaints process in a reasonable manner. In addition, you may have
            rights to make a complaint to fair trading or consumer law bodies in
            relation to applicable consumer laws, including the non-excludable
            portions of the Australian Consumer Law. Except as otherwise set
            forth in these Terms, these Terms shall be exclusively governed by
            and construed in accordance with the laws of the governing State of
            Australia, excluding its rules on conflicts of laws. The Vienna
            Convention on the International Sale of Goods of 1980 (CISG) shall
            not apply. In the event of a Dispute, either party may file an
            action in the courts of the governing State of Australia or pursue
            final or binding arbitration or other alternative dispute resolution
            as agreed upon by the parties. Any proceedings, including documents
            and briefs submitted by the parties, correspondence from a mediator,
            and correspondence, order and awards issued by an arbitrator, shall
            remain strictly confidential and shall not be disclosed to any third
            party without the express written consent from the other party
            unless: (i) the disclosure to the third party is reasonably required
            in the context of conducting the mediation or arbitration
            proceedings; and (ii) the third party agrees unconditionally in
            writing to be bound by the confidentiality obligation set out in
            these Terms. 7. OTHER PROVISIONS Claims of Copyright Infringement.
            Claims of copyright infringement should be sent to Floatsta’s
            designated agent. Please visit Floatsta’s web page at
            https://www.Floatsta.com/legal for the designated address and
            additional information. Notice. Floatsta may give notice by means of
            a general notice on the Services, electronic mail to your email
            address in your Account, or by written communication sent to your
            address as set forth in your Account. You may give notice to
            Floatsta by written communication to Floatsta's address at 10 Eagle
            Street Level 19 Brisbane, 4000, Queensland, Australia General. You
            may not assign or transfer these Terms in whole or in part without
            Floatsta’s prior written approval. You give your approval to
            Floatsta for it to assign or transfer these Terms in whole or in
            part, including to: (i) a subsidiary or affiliate; (ii) an acquirer
            of Floatsta’s equity, business or assets; or (iii) a successor by
            merger. No joint venture, partnership, employment or agency
            relationship exists between you, Floatsta or any Third Party
            Provider as a result of the contract between you and Floatsta or use
            of the Services. If any provision of these Terms is held to be
            illegal, invalid or unenforceable, in whole or in part, under any
            law, such provision or part thereof shall to that extent be deemed
            not to form part of these Terms but the legality, validity and
            enforceability of the other provisions in these Terms shall not be
            affected. In that event, the parties shall replace the illegal,
            invalid or unenforceable provision or part thereof with a provision
            or part thereof that is legal, valid and enforceable and that has,
            to the greatest extent possible, a similar effect as the illegal,
            invalid or unenforceable provision or part thereof, given the
            contents and purpose of these Terms. These Terms, including any
            incorporated policies, constitute the entire agreement and
            understanding of the parties with respect to its subject matter and
            replaces and supersedes all prior or contemporaneous agreements or
            undertakings regarding such subject matter. Nothing in this clause
            limits your rights as a consumer that cannot be excluded under
            applicable law, including the Australian Consumer Law. In these
            Terms, the words “including” and “include” mean “including, but not
            limited to.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
